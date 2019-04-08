// v1.0.1
//是否使用IDE自带的node环境和插件，设置false后，则使用自己环境(使用命令行方式执行)
const useIDENode = process.argv[0].indexOf("LayaAir") > -1 ? true : false;
//获取Node插件和工作路径
let ideModuleDir = useIDENode ? process.argv[1].replace("gulp\\bin\\gulp.js", "").replace("gulp/bin/gulp.js", "") : "";
let workSpaceDir = useIDENode ? process.argv[2].replace("--gulpfile=", "").replace("\\.laya\\publish.js", "").replace("/.laya/publish.js", "") + "/" : "./../";

//引用插件模块
const gulp = require(ideModuleDir + "gulp");
const fs = require("fs");
const path = require("path");
const uglify = require(ideModuleDir + "gulp-uglify");
const jsonminify = require(ideModuleDir + "gulp-jsonminify");
const image = require(ideModuleDir + "gulp-image");
const rev = require(ideModuleDir + "gulp-rev");
const revdel = require(ideModuleDir + "gulp-rev-delete-original");
const revCollector = require(ideModuleDir + 'gulp-rev-collector');
const del = require(ideModuleDir + "del");
const requireDir = require(ideModuleDir + 'require-dir');

// 结合compile.js使用
global.publish = true;
requireDir('./', {
	filter: function (fullPath) {
		// 只用到了compile.js和publish.js
		if (path.basename(fullPath) === "compile.js") {
			return true;
		} else {
			return false;
		}
	}
});


//清理临时文件夹，加载配置
let config,
	releaseDir,
	platform;
gulp.task("loadConfig", function () {
	platform = "web"
	if (!useIDENode && process.argv.length > 5 && process.argv[4] == "--config") {
		platform = process.argv[5].replace(".json", "");
	}
	if (useIDENode && process.argv.length >= 4 && process.argv[3].startsWith("--config") && process.argv[3].endsWith(".json")) {
		platform = process.argv[3].match(/(\w+).json/)[1];
	}
	let _path;
	if (!useIDENode) {
		_path = platform + ".json";
		releaseDir = "../release/" + platform;
	}
	if (useIDENode) {
		_path = path.join(workSpaceDir, ".laya", `${platform}.json`);
		releaseDir = path.join(workSpaceDir, "release", platform).replace(/\\/g, "/");
	}
	let file = fs.readFileSync(_path, "utf-8");
	if (file) {
		file = file.replace(/\$basePath/g, releaseDir);
		config = JSON.parse(file);
		global.config = config;
		global.workSpaceDir = workSpaceDir;
	}
});

//重新编译项目
// gulp.task("compile", ["loadConfig"], function () {
// 	if (config.compile) {
// 		console.log("compile");
// 	}
// });

//清理release文件夹
gulp.task("clearReleaseDir", ["compile"], function (cb) {
	if (config.clearReleaseDir) {
		del([releaseDir, releaseDir + "_pack", config.packfileTargetValue], { force: true }).then(paths => {
			cb();
		});
	} else cb();
});

//copy bin文件到release文件夹
gulp.task("copyFile", ["clearReleaseDir"], function () {
	let baseCopyFilter = `${workSpaceDir}/bin/**/*.*`;
	if (platform === "wxgame") { // 微信项目，不拷贝index.html，不拷贝百度bin目录中的文件
		config.copyFilesFilter = [baseCopyFilter, `!${workSpaceDir}/bin/index.html`, `!${workSpaceDir}/bin/{project.swan.json,swan-game-adapter.js}`];
	} else if (platform === "bdgame") { // 百度项目，不拷贝index.html，不拷贝微信bin目录中的文件
		config.copyFilesFilter = [baseCopyFilter, `!${workSpaceDir}/bin/index.html`, `!${workSpaceDir}/bin/{project.config.json,weapp-adapter.js}`];
	} else { // web|QQ项目，不拷贝微信、百度在bin目录中的文件
		config.copyFilesFilter = [baseCopyFilter, `!${workSpaceDir}/bin/{game.js,game.json,project.config.json,weapp-adapter.js,project.swan.json,swan-game-adapter.js}`];
	}
	var stream = gulp.src(config.copyFilesFilter);
	return stream.pipe(gulp.dest(releaseDir));
});

// 根据不同的项目类型拷贝平台文件
gulp.task("copyPlatformFile", ["copyFile"], function () {
	let fileLibsPath;
	if (useIDENode) {
		fileLibsPath = path.join(ideModuleDir, "../", "out", "layarepublic", "LayaAirProjectPack", "lib", "data");
	} else if (process.argv.length >= 8 && process.argv[6] === "--libspath") {
		fileLibsPath = process.argv[7];
		console.log("平台文件包是否存在: " + fs.existsSync(fileLibsPath));
	} else {
		console.log("没有接收到可用文件包位置，不拷贝对应平台文件");
		return;
	}
	// 微信项目
	if (platform === "wxgame") {
		// 如果新建项目时已经点击了"微信/百度小游戏bin目录快速调试"，不再拷贝
		let isHadWXFiles =
			fs.existsSync(path.join(workSpaceDir, "bin", "game.js")) &&
			fs.existsSync(path.join(workSpaceDir, "bin", "game.json")) &&
			fs.existsSync(path.join(workSpaceDir, "bin", "project.config.json")) &&
			fs.existsSync(path.join(workSpaceDir, "bin", "weapp-adapter.js"));
		if (isHadWXFiles) {
			return;
		}
		let platformDir = path.join(fileLibsPath, "wxfiles");
		let stream = gulp.src(platformDir + "/*.*");
		return stream.pipe(gulp.dest(releaseDir));
	}
	// qq玩一玩项目，区分语言
	if (platform === "qqwanyiwan") {
		let projectLangDir = config.projectType;
		let platformDir = path.join(fileLibsPath, "qqfiles", projectLangDir);
		let stream = gulp.src(platformDir + "/**/*.*");
		return stream.pipe(gulp.dest(releaseDir));
	}
	// 百度项目
	if (platform === "bdgame") {
		// 如果新建项目时已经点击了"微信/百度小游戏bin目录快速调试"，不再拷贝
		let isHadBdFiles =
			fs.existsSync(path.join(workSpaceDir, "bin", "game.js")) &&
			fs.existsSync(path.join(workSpaceDir, "bin", "game.json")) &&
			fs.existsSync(path.join(workSpaceDir, "bin", "project.swan.json")) &&
			fs.existsSync(path.join(workSpaceDir, "bin", "swan-game-adapter.js"));
		if (isHadBdFiles) {
			return;
		}
		let platformDir = path.join(fileLibsPath, "bdfiles");
		let stream = gulp.src(platformDir + "/*.*");
		return stream.pipe(gulp.dest(releaseDir));
	}
});

// 拷贝文件后，针对特定平台修改文件内容
gulp.task("modifyFile", ["copyPlatformFile"], function () {
	// QQ玩一玩
	if (platform === "qqwanyiwan") {
		// 修改bundle.js
		let bundleFilePath = path.join(releaseDir, "js", "bundle.js");
		if (fs.existsSync(bundleFilePath)) {
			let fileContent = fs.readFileSync(bundleFilePath, "utf8");
			var appendCode = 'if(window["BK"]&&window["BK"]["Sprite"]){BK.Script.loadlib("GameRes://layaforqq/laya.bkadpter.js");}';
			if (fileContent.includes("/**LayaGameStart**/") && !fileContent.includes(appendCode)) {
				fileContent = fileContent.split("/**LayaGameStart**/").join(`/**LayaGameStart**/\n${appendCode}`);
				fs.writeFileSync(bundleFilePath, fileContent, "utf8");
			}
		}

		// 修改index.js
		let indexFilePath = path.join(releaseDir, "index.js");
		if (fs.existsSync(indexFilePath)) {
			let fileContent = fs.readFileSync(indexFilePath, "utf8");
			fileContent = fileContent.replace(/loadLib\("/g, "BK.Script.loadlib(\"GameRes://");
			// 非as语言，要添加类库
			if ("as" !== config.projectType) {
				if (fileContent.includes("//-----libs-end-------")) {
					fileContent = fileContent.split("//-----libs-end-------").join(`//-----libs-end-------\nBK.Script.loadlib("GameRes://layaforqq/laya.bkadpter.js");`);
				}
			}
			fs.writeFileSync(indexFilePath, fileContent, "utf8");
		}

		// 修改main.js
		let mainFilePath = path.join(releaseDir, "main.js");
		if (fs.existsSync(mainFilePath)) {
			let fileContent = fs.readFileSync(mainFilePath, "utf8");
			fileContent = `BK.Script.loadlib("GameRes://layaforqq/qqPlayCore.js");
BK.Script.loadlib("GameRes://layaforqq/bkadptpre.js");
BK.Script.loadlib("GameRes://layaforqq/domparserinone.js");
BK.Script.loadlib("GameRes://index.js");`;
			fs.writeFileSync(mainFilePath, fileContent, "utf8");
		}

		return;
	}

	// 百度项目，修改index.js
	if (platform === "bdgame") {
		let filePath = path.join(releaseDir, "index.js");
		if (!fs.existsSync(filePath)) {
			return;
		}
		let fileContent = fs.readFileSync(filePath, "utf8");
		fileContent = fileContent.replace(/loadLib\(/g, "require(");
		fs.writeFileSync(filePath, fileContent, "utf8");
		return;
	}
});

//压缩json
gulp.task("compressJson", ["modifyFile"], function () {
	if (config.compressJson) {
		return gulp.src(config.compressJsonFilter)
			.pipe(jsonminify())
			.pipe(gulp.dest(releaseDir));
	}
});

//压缩js
gulp.task("compressJs", ["compressJson"], function () {
	if (config.compressJs) {
		return gulp.src(config.compressJsFilter)
			.pipe(uglify())
			.on('error', function (err) {
				console.warn(err.toString());
			})
			.pipe(gulp.dest(releaseDir));
	}
});

//压缩png，jpg
gulp.task("compressImage", ["compressJs"], function () {
	if (config.compressImage) {
		return gulp.src(config.compressImageFilter)
			.pipe(image({
				pngquant: true,			//PNG优化工具
				optipng: false,			//PNG优化工具
				zopflipng: true,		//PNG优化工具
				jpegRecompress: false,	//jpg优化工具
				mozjpeg: true,			//jpg优化工具
				guetzli: false,			//jpg优化工具
				gifsicle: false,		//gif优化工具
				svgo: false,			//SVG优化工具
				concurrent: 10,			//并发线程数
				quiet: true 			//是否是静默方式
				// optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
				// pngquant: ['--speed=1', '--force', 256],
				// zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
				// jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
				// mozjpeg: ['-optimize', '-progressive'],
				// guetzli: ['--quality', 85]
			}))
			.pipe(gulp.dest(releaseDir));
	}
});


//开放域的情况下，合并game.js和index.js
gulp.task("openData", ["compressImage"], function () {
	if (config.openDataZone) {
		let indexPath = releaseDir + "/index.js";
		let indexjs = readFile(indexPath);
		let gamejs = readFile(releaseDir + "/game.js");
		if (gamejs && indexjs) {
			gamejs = gamejs.replace('require("index.js")', indexjs);
			fs.writeFileSync(indexPath, gamejs, 'utf-8');
		}
	}
});

function readFile(path) {
	if (fs.existsSync(path)) {
		return fs.readFileSync(path, "utf-8");
	}
	return null;
}

//生成版本管理信息
gulp.task("version1", ["openData"], function () {
	if (config.version) {
		return gulp.src(config.versionFilter)
			.pipe(rev())
			.pipe(gulp.dest(releaseDir))
			.pipe(revdel())
			.pipe(rev.manifest("version.json"))
			.pipe(gulp.dest(releaseDir));
	}
});

//替换index.js里面的变化的文件名
gulp.task("version2", ["version1"], function () {
	if (config.version) {
		//替换index.html和index.js里面的文件名称

		let htmlPath = releaseDir + "/index.html";
		let versionPath = releaseDir + "/version.json";
		let gameJSPath = releaseDir + "/game.js";
		let mainJSPath = releaseDir + "/main.js";
		let indexJSPath;
		let versionCon = fs.readFileSync(versionPath, "utf8");
		versionCon = JSON.parse(versionCon);
		indexJSPath = releaseDir + "/" + versionCon["index.js"];
		// 替换config.packfileFullValue中的路径
		let packfileStr = JSON.stringify(config.packfileFullValue).replace(/\\\\/g, "/");
		let tempPackfile = `${workSpaceDir}/.laya/configTemp.json`;
		fs.writeFileSync(tempPackfile, packfileStr, "utf8");

		let srcList = [versionPath, indexJSPath, tempPackfile];
		if (fs.existsSync(htmlPath)) {
			srcList.push(htmlPath);
		}
		if (fs.existsSync(gameJSPath)) {
			srcList.push(gameJSPath);
		}
		if (fs.existsSync(mainJSPath)) {
			srcList.push(mainJSPath);
		}
		return gulp.src(srcList)
			.pipe(revCollector())
			.pipe(gulp.dest(releaseDir));
	}
});

//起始任务，筛选4M包
gulp.task("publish", ["version2"], function () {
	if (config.version) {
		// 从release目录取得带有版本号的目录
		let tempPackfile = `${workSpaceDir}/.laya/configTemp.json`;
		let releasePackfile = `${releaseDir}/configTemp.json`;
		let packfileStr = fs.readFileSync(releasePackfile, "utf8");
		config.packfileFullValue = JSON.parse(packfileStr);
		// 删掉临时目录
		fs.unlinkSync(tempPackfile);
		fs.unlinkSync(releasePackfile);
	}
	if (config.packfile) { // 提取本地包(文件列表形式)
		return gulp.src(config.packfileFullValue, { base: releaseDir })
			.pipe(gulp.dest(config.packfileTargetValue || releaseDir + "_pack"));
	}
});