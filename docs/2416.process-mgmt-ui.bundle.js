(self["webpackChunkprocess_mgmt_ui"] = self["webpackChunkprocess_mgmt_ui"] || []).push([[2416],{

/***/ 8260:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./active_mods.json": [
		85,
		85
	],
	"./assembling-machine.json": [
		2955,
		2955
	],
	"./boiler.json": [
		2029,
		2029
	],
	"./equipment-grid.json": [
		4958,
		4958
	],
	"./equipment.json": [
		4040,
		4040
	],
	"./fluid.json": [
		9256,
		9256
	],
	"./furnace.json": [
		7716,
		7716
	],
	"./generator.json": [
		7783,
		7783
	],
	"./inserter.json": [
		2789,
		2789
	],
	"./item.json": [
		3771,
		3771
	],
	"./lab.json": [
		4167,
		4167
	],
	"./mining-drill.json": [
		8383,
		8383
	],
	"./projectile.json": [
		8588,
		8588
	],
	"./reactor.json": [
		3373,
		3373
	],
	"./recipe.json": [
		2576,
		2576
	],
	"./resource.json": [
		7257,
		7257
	],
	"./rocket-silo.json": [
		7386,
		7386
	],
	"./solar-panel.json": [
		9795,
		9795
	],
	"./technology.json": [
		6272,
		6272
	],
	"./transport-belt.json": [
		7207,
		7207
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 1 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8260;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5498:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factorio_recipe_lister_data_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6746);

var _import_file = function _import_file(name) {
  return __webpack_require__(8260)("./" + name)["catch"](function (e) {
    console.log('failed to read recipe.json:', e);
  }).then(function (m) {
    return m["default"];
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (await (0,_factorio_recipe_lister_data_base_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('factorio-2.0.66-sa-2.0.66', '1.0.0', _import_file));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);