//-----libs-begin-----
//loadLib("libs/laya.core.js")
//-----libs-end-------
/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

loadLib("thirdPlugins/long.js");
//引擎库加载
loadLib("libs/laya.core.js");
loadLib("libs/laya.webgl.js");
loadLib("libs/laya.ui.js");
loadLib("libs/laya.physics3D.js");
loadLib("libs/laya.d3.js");
loadLib("libs/laya.filter.js");
loadLib("libs/laya.html.js");

//#region thirdPlugins 添加
loadLib("thirdPlugins/rawinflate/rawinflate.min.js");
loadLib("thirdPlugins/fairygui/fairygui.min.js");
loadLib("thirdPlugins/encoding.js");

loadLib("thirdPlugins/protobuf/library/protobuf-library.min.js");
loadLib("thirdPlugins/protobuf/bundles/protobuf-bundles.min.js");
//#endregion

loadLib("js/bundle.js");