(self["webpackChunkprocess_mgmt_ui"] = self["webpackChunkprocess_mgmt_ui"] || []).push([[9201],{

/***/ 7857:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./active_mods.json": [
		3018,
		3018
	],
	"./assembling-machine.json": [
		4743,
		4743
	],
	"./boiler.json": [
		7921,
		7921
	],
	"./equipment-grid.json": [
		2318,
		2318
	],
	"./equipment.json": [
		7957,
		7957
	],
	"./fluid.json": [
		7637,
		7637
	],
	"./furnace.json": [
		7913,
		7913
	],
	"./generator.json": [
		7707,
		7707
	],
	"./inserter.json": [
		922,
		922
	],
	"./item.json": [
		6119,
		6119
	],
	"./lab.json": [
		600,
		600
	],
	"./mining-drill.json": [
		633,
		633
	],
	"./projectile.json": [
		771,
		771
	],
	"./reactor.json": [
		5661,
		5661
	],
	"./recipe.json": [
		8476,
		8476
	],
	"./resource.json": [
		725,
		725
	],
	"./rocket-silo.json": [
		6566,
		6566
	],
	"./solar-panel.json": [
		7027,
		7027
	],
	"./technology.json": [
		5291,
		5291
	],
	"./transport-belt.json": [
		2772,
		2772
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
webpackAsyncContext.id = 7857;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 8468:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factorio_recipe_lister_data_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6746);

var _import_file = function _import_file(name) {
  return __webpack_require__(7857)("./" + name)["catch"](function (e) {
    console.log('failed to read recipe.json:', e);
  }).then(function (m) {
    return m["default"];
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (await (0,_factorio_recipe_lister_data_base_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('factorio-1.1.104-very-bz-0.5.1', '0.0.1', _import_file));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);