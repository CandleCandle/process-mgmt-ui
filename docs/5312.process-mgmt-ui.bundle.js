(self["webpackChunkprocess_mgmt_ui"] = self["webpackChunkprocess_mgmt_ui"] || []).push([[5312],{

/***/ 6631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./active_mods.json": [
		3981,
		3981
	],
	"./assembling-machine.json": [
		1100,
		1100
	],
	"./boiler.json": [
		9717,
		9717
	],
	"./equipment-grid.json": [
		292,
		292
	],
	"./equipment.json": [
		2354,
		2354
	],
	"./fluid.json": [
		4866,
		4866
	],
	"./furnace.json": [
		6501,
		6501
	],
	"./generator.json": [
		4797,
		4797
	],
	"./inserter.json": [
		5020,
		5020
	],
	"./item.json": [
		3187,
		3187
	],
	"./lab.json": [
		3542,
		3542
	],
	"./mining-drill.json": [
		1703,
		1703
	],
	"./projectile.json": [
		4168,
		4168
	],
	"./reactor.json": [
		3831,
		3831
	],
	"./recipe.json": [
		151,
		151
	],
	"./resource.json": [
		1715,
		1715
	],
	"./rocket-silo.json": [
		3014,
		3014
	],
	"./solar-panel.json": [
		2296,
		2296
	],
	"./technology.json": [
		77,
		77
	],
	"./transport-belt.json": [
		4689,
		4689
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
webpackAsyncContext.id = 6631;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 1443:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factorio_recipe_lister_data_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6746);

var _import_file = function _import_file(name) {
  return __webpack_require__(6631)("./" + name)["catch"](function (e) {
    console.log('failed to read recipe.json:', e);
  }).then(function (m) {
    return m["default"];
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (await (0,_factorio_recipe_lister_data_base_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('factorio-1.1.94-k2se', '0.0.1', _import_file));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);