(self["webpackChunkprocess_mgmt_ui"] = self["webpackChunkprocess_mgmt_ui"] || []).push([[2416],{

/***/ 4843:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./active_mods.json": [
		7796,
		7796
	],
	"./assembling-machine.json": [
		3030,
		3030
	],
	"./boiler.json": [
		9161,
		9161
	],
	"./equipment-grid.json": [
		2365,
		2365
	],
	"./equipment.json": [
		6108,
		6108
	],
	"./fluid.json": [
		5943,
		5943
	],
	"./furnace.json": [
		9509,
		9509
	],
	"./generator.json": [
		3698,
		3698
	],
	"./inserter.json": [
		796,
		796
	],
	"./item.json": [
		7108,
		7108
	],
	"./lab.json": [
		1729,
		1729
	],
	"./mining-drill.json": [
		1319,
		1319
	],
	"./projectile.json": [
		1464,
		1464
	],
	"./reactor.json": [
		7321,
		7321
	],
	"./recipe.json": [
		8491,
		8491
	],
	"./resource.json": [
		5104,
		5104
	],
	"./rocket-silo.json": [
		7258,
		7258
	],
	"./solar-panel.json": [
		6059,
		6059
	],
	"./technology.json": [
		1001,
		1001
	],
	"./transport-belt.json": [
		7314,
		7314
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
webpackAsyncContext.id = 4843;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 6136:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factorio_recipe_lister_data_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6746);

var _import_file = function _import_file(name) {
  return __webpack_require__(4843)("./" + name)["catch"](function (e) {
    console.log('failed to read recipe.json:', e);
  }).then(function (m) {
    return m["default"];
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (await (0,_factorio_recipe_lister_data_base_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('factorio-2.0.7-sa-1.0.0', '1.0.0', _import_file));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);