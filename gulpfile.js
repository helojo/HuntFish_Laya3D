//获取Node插件和工作路径
let ideModuleDir = "./node_modules/";
let workSpaceDir = "./";

//引用插件模块
let gulp = require(ideModuleDir + "gulp");
let fs = require("fs");
var del = require('del');
let gulpSequence = require(ideModuleDir + 'gulp-sequence');
let sd = require(ideModuleDir + "silly-datetime");
let zip = require(ideModuleDir + 'gulp-zip');
let rename = require(ideModuleDir + "gulp-rename");
var prog = require('child_process');

let publishConfig = null;
let publishPath = `${process.cwd()}/release/web/5006`;
let versionFile = null;
let gameVersion = "1.5.";
let buildId = 1;
let gameId = 5006;
let curDate = null;

//本地build路径
var GULP_PATH = null;
if (process.env.GULP_BUILD) {
	GULP_PATH = process.env.GULP_BUILD.split(';');
}

//读取发布配置
function ReadPublishConfig() {
	console.log("读取发布配置");
	var tempPath = `${process.cwd()}/.laya/pubset.json`;
	var readData = fs.readFileSync(tempPath, 'utf8');
	if (readData) {
		publishConfig = JSON.parse(readData);
		console.log("找到发布配置");
	} else {
		console.log("未找到发布配置");
	}
}

//读取版本文件 主要是拿到 index.js 对应的文件名
function ReadVersionFile() {
	if (versionFile) {
		console.log("已经读取了version.json文件");
		return;
	}
	console.log("读取version.json文件");
	var tempPath = `${publishPath}/version.json`;
	var readData = fs.readFileSync(tempPath, 'utf8');
	if (readData) {
		versionFile = JSON.parse(readData);
		let indexName = versionFile["index.js"];
		console.log("找到index.js : ", indexName);
		return indexName;
	} else {
		console.log("未找到index.js");
		return "index.js";
	}
}

//每次发布版本都会增加 build ID
function addBuildId(cb) {
	var tempPath = `${process.cwd()}/version_config`;
	fs.exists(`${tempPath}/buildConfig.json`, function (exists) {
		var content;
		if (exists) {
			let readData = fs.readFileSync(`${tempPath}/buildConfig.json`, 'utf8');
			let buildContent = JSON.parse(readData);
			buildId = parseInt(buildContent.buildId) + 1;
			content = `{\n\t"buildId":"${buildId}"\n}`;
		} else {
			content = `{\n\t"buildId":"${buildId}"\n}`;
		}
		console.log("build ID-------------------- :" + buildId);
		fs.writeFileSync(`${tempPath}/buildConfig.json`, content);
		cb();
	});
}

//获取build ID ，一直累加
gulp.task('buildIdTask', function (cb) {
	var tempPath = `${process.cwd()}/version_config/`;
	fs.exists(`${tempPath}`, function (exists) {
		if (exists) {
			addBuildId(cb);
		} else {
			fs.mkdir(`${tempPath}`, function (err) {
				if (err) {
					console.error("error  :" + err);
					cb();
				} else {
					console.log(`创建${gameId}目录成功`);
					addBuildId(cb);
				}
			});
		}
	});
});

//更改main.js  index.js文件名
gulp.task("changeIndexjs", function (cb) {
	ReadPublishConfig();
	let outpath = publishConfig[0]["outPath"];
	publishPath = outpath.replace(/\\/g, '/');
	console.log("发布路径: ", publishPath);
	var indexName = ReadVersionFile();
	console.log("更改main.js里的index.js字段");
	var tempPath = `${publishPath}/main.js`;
	var readData = fs.readFileSync(tempPath, 'utf8');
	if (readData) {
		let index = readData.indexOf("index.js");
		if (index > 0) {
			console.log("查找到index.js字段,并更改");
			let changeFile = readData.replace(/index.js/, indexName);
			fs.writeFileSync(tempPath, changeFile, 'utf8');
			cb();
		} else {
			console.log("没有查找到index.js字段");
			cb();
		}
	} else {
		console.log("未找到mian.js文件");
		cb();
	}
});

//更改index.html的版本日期
gulp.task('setHtmlVersion', function (cb) {
	console.log("更改版本日期");
	curDate = new Date();
	let path = `${publishPath}/index.html`;
	let changeFile = null;
	var readData = fs.readFileSync(path, 'utf8');
	if (readData) {
		let index = readData.indexOf("value=\"123\"");
		if (index > 0) {
			changeFile = readData.replace(/value=\"123\"/, `value=\"${gameVersion}${sd.format(curDate, 'YYMMDD')}.${buildId}\"`);
			console.log("正在写入index.html");
			fs.writeFileSync(path, changeFile, 'utf8');
			cb();
		} else {
			//如果找不到直接return 不进行更改文件
			console.log("index.html没有找到vale=123");
			cb();
		}
	} else {
		console.log(path + '读取文件失败');
		cb();
	}
});

/**
 * 打包zip
 */
gulp.task("pack_zip", function (cb) {
	console.log("创建压缩包");
	curDate = new Date();
	return gulp.src(`${publishPath}/**`)
		.pipe(zip(`${gameId}.zip`))
		.pipe(gulp.dest(`${publishPath}/`));
});

//删除ZIP包
gulp.task("zip_del", function (cb) {
	console.log("删除" + gameId + " zip包");
	return del([
		`${publishPath}/*.zip`
	], cb);
});

/**
 * 添加version.json
 */
gulp.task("zip_version", function (cb) {
	console.log("创建更新文件version.json");
	curDate = new Date();
	var content = `{\n\t"version":"${sd.format(curDate, 'YYYY.MM.DD.HH.mm.ss')}",\n\t"index":"${gameId}/index.html"\n}`;
	fs.writeFileSync(`${publishPath}/version.json`, content);
	cb();
});

//因为打包后和FG大厅里的版本更新文件 version.json 命名冲突。需要更改名字
gulp.task("rename", function () {
	console.log("version.json进行更名成gameVersion.json");
	return gulp.src(`${publishPath}/version.json`)
		.pipe(rename(`${publishPath}/gameVersion.json`))
		.pipe(gulp.dest("./"));
});
gulp.task("cleanVersion", ['rename'], function (cb) {
	console.log("删除原来的version.json");
	return del([
		`${publishPath}/version.json`,
	], cb);
});

//修改index.js 引入bundle.js 库
function wirteIndexjs(indexName, bundleName) {
	let indexjsPath = `${publishPath}/${indexName}`;
	let readData = fs.readFileSync(indexjsPath, 'utf8');
	console.log("打开: ", indexjsPath);
	if (readData) {
		let changeFile = readData.replace(/loadLib\(\"js\/bundle.*\.js\"\)/, `loadLib("js/${bundleName}")`);
		fs.writeFileSync(indexjsPath, changeFile, 'utf8');
		console.log(indexjsPath + " 更改成功");
	} else {
		console.log(indexjsPath + ' 读取文件失败');
	}
}

gulp.task("updateIndexjs", function (cb) {
	let bundleName = "";
	let indexName = "";
	console.log("更新修改index.js引入bundle.js库");
	fs.readdir(publishPath + '/js/', function (err, files) {
		console.log("查找发布bundle文件");
		console.log("err:", err);
		if (!err) {
			if (files.length > 0) {
				bundleName = files[0];
				console.log("找到文件: ", bundleName);
				fs.readdir(publishPath, function (_err, _files) {
					console.log("查找发布目录文件:");
					if (!_err) {
						for (var index in _files) {
							var reg = /index.*\.js/;
							if (reg.test(_files[index])) {
								console.log("匹配到值:");
								indexName = _files[index];
								console.log(indexName);
								wirteIndexjs(indexName, bundleName);
							}
						}
					}
					cb();
				});
			} else {
				console.log("未找到bundle.js文件");
				cb();
			}
		}
	});
});


//上传至服务器
gulp.task('upload', function (cb) {
	console.log("上传至 dev");
	let proPath = process.cwd();
	let origin_path = proPath + "/release/web";

	var uploadCmd = `${GULP_PATH[1]} /console /command "option batch continue" "option confirm off" "open sftp://by:93hsdvsa@dev-php-1.blizzmi.local/ -hostkey=""ssh-ed25519 256 5c:a0:0b:0a:82:21:c0:ec:a7:4b:d6:30:2c:e9:28:b1""" "option transfer binary" "rmdir ${gameId}" "put ${origin_path}\\*" "chmod 775 ${gameId}" "exit" `
	console.log(uploadCmd);
	if (uploadCmd != null) {
		try {
			var s = prog.execSync(uploadCmd);
			console.log(s.toString());
			console.log("已经上传至服务器");
		} catch (ex) {
			console.log(ex);
		}
	} else {
		console.log("uploadCmd is null");
	}
	cb();
});


gulp.task("clearDist", function (cb) {
	console.log("清除dist包");
	return del([
		`./dist`,
	], cb);
});

gulp.task("pdev", ['clearDist'], function (cb) {
	console.log("拷贝dist数据包");
	return gulp.src(`${publishPath}/**/*`).pipe(gulp.dest(`./dist/${gameId}`));
});

gulp.task("buildPdev", ['pdev'], function (cb) {
	console.log("创建dist:");
	fs.readdir(`./dist/${gameId}`, function (err, files) {
		console.log("遍历文件");
		console.log(files);
	});
	fs.readdir(`./dist/${gameId}` + '/js/', function (err, files) {
		console.log("查找bundjs文件");
		console.log(files);
		cb();
	});
});

gulp.task('ci', function () {
	console.log("CI自动部署PDEV");
});

//打包更改 并且 上传
gulp.task("default", function (cb) {
	gulpSequence('changeIndexjs', 'updateIndexjs', 'cleanVersion', 'buildIdTask', 'setHtmlVersion', 'zip_del', 'pack_zip', 'zip_version', 'upload', function () {
		console.log("gulp输出完成！");
	})(cb);
});

//打包更改 但是不上传
gulp.task("packnotup", function (cb) {
	gulpSequence('changeIndexjs', 'updateIndexjs', 'cleanVersion', 'buildIdTask', 'setHtmlVersion', 'zip_del', 'pack_zip', 'zip_version', function () {
		console.log("gulp输出完成！");
	})(cb);
});

//Pdev打包 会自动拷贝dist 但是不上传
gulp.task("packpdev", function (cb) {
	gulpSequence('changeIndexjs', 'updateIndexjs', 'cleanVersion', 'buildIdTask', 'setHtmlVersion', 'zip_del', 'pack_zip', 'zip_version', 'buildPdev', function () {
		console.log("gulp输出完成！");
	})(cb);
});