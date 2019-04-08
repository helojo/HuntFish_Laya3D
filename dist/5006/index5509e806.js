//-----libs-begin-----
//loadLib("libs/laya.coref3b2ac1a.js")
//-----libs-end-------
/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//引擎库加载
loadLib("libs/laya.coref3b2ac1a.js");
loadLib("libs/laya.webglb0adda52.js");
loadLib("libs/laya.ui6425d5ef.js");
loadLib("libs/laya.physics3D0b89b83d.js");
loadLib("libs/laya.d302b41205.js");
loadLib("libs/laya.filter631c8538.js");
loadLib("libs/laya.htmlbc97b9a5.js");

//#region thirdPlugins 添加
loadLib("thirdPlugins/rawinflate/rawinflate.min0891a514.js");
loadLib("thirdPlugins/fairygui/fairygui.mind693b700.js");
loadLib("thirdPlugins/encodingae4b7c73.js");

loadLib("thirdPlugins/protobuf/library/protobuf-library.min022e3876.js");
loadLib("thirdPlugins/protobuf/bundles/protobuf-bundles.minb3970b12.js");
//#endregion

loadLib("js/bundle8c521cb0.js");