"use strict";
(self["webpackChunkprocess_mgmt_ui"] = self["webpackChunkprocess_mgmt_ui"] || []).push([[4208],{

/***/ 4214:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Data)
/* harmony export */ });
/* harmony import */ var _structures_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6968);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Data = /*#__PURE__*/function () {
  function Data(game, version) {
    _classCallCheck(this, Data);
    (0,_structures_base_js__WEBPACK_IMPORTED_MODULE_0__/* .check */ .B)('game', game, 'version', version);
    this.game = game;
    this.version = version;
    this.items = {};
    this.factory_groups = {};
    this.factories = {};
    this.processes = {};
  }
  _createClass(Data, [{
    key: "_check_add",
    value: function _check_add(type, thing) {
      if (!(typeof this[type][thing.id] === 'undefined')) {
        throw new Error('duplicate ' + type + ' id created: ' + thing);
      }
      this[type][thing.id] = thing;
    }
  }, {
    key: "add_item",
    value: function add_item(item) {
      this._check_add('items', item);
    }
  }, {
    key: "add_factory_group",
    value: function add_factory_group(factory_group) {
      this._check_add('factory_groups', factory_group);
    }
  }, {
    key: "add_factory",
    value: function add_factory(factory) {
      this._check_add('factories', factory);
    }
  }, {
    key: "add_process",
    value: function add_process(process) {
      this._check_add('processes', process);
    }
  }, {
    key: "add_items",
    value: function add_items(items) {
      var _iterator = _createForOfIteratorHelper(items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          this.add_item(i);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "add_factory_groups",
    value: function add_factory_groups(factory_groups) {
      var _iterator2 = _createForOfIteratorHelper(factory_groups),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var f = _step2.value;
          this.add_factory_group(f);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "add_factories",
    value: function add_factories(factories) {
      var _iterator3 = _createForOfIteratorHelper(factories),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var f = _step3.value;
          this.add_factory(f);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "add_processes",
    value: function add_processes(processes) {
      var _iterator4 = _createForOfIteratorHelper(processes),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var p = _step4.value;
          this.add_process(p);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }]);
  return Data;
}();


/***/ }),

/***/ 8269:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ data_from_standard_json)
/* harmony export */ });
/* harmony import */ var _structures_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4214);
/* harmony import */ var _structures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4700);
/* harmony import */ var _structures_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3658);
/* harmony import */ var _structures_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8604);
/* harmony import */ var _structures_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1341);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var check_add = function check_add(item, fn) {
  try {
    return fn();
  } catch (error) {
    console.log('error processing item:', item);
    throw error;
  }
};
function data_from_standard_json(name, version, json_import_p) {
  return json_import_p.then(function (module) {
    return module["default"];
  }).then(function (raw) {
    var data = new _structures_js__WEBPACK_IMPORTED_MODULE_0__/* .Data */ .V(name, version);
    var _iterator = _createForOfIteratorHelper(raw.items),
      _step;
    try {
      var _loop = function _loop() {
        var i = _step.value;
        check_add(i, function () {
          if (!i.id) return;
          data.add_item(new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c(i.id, i.i18n.en, i.group));
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(raw.processes),
      _step2;
    try {
      var _loop2 = function _loop2() {
        var p = _step2.value;
        if (!p.name) return "continue";
        if (!data.factory_groups['' + p.factory_group]) {
          check_add(p, function () {
            return data.add_factory_group(new _structures_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a('' + p.factory_group));
          });
        }
        var inputs = Object.entries(p.inputs).map(function (e) {
          return check_add(p, function () {
            return new _structures_js__WEBPACK_IMPORTED_MODULE_3__/* .Stack */ .K(data.items[e[0]], e[1]);
          });
        });
        var outputs = Object.entries(p.outputs).map(function (e) {
          return check_add(p, function () {
            return new _structures_js__WEBPACK_IMPORTED_MODULE_3__/* .Stack */ .K(data.items[e[0]], e[1]);
          });
        });
        check_add(p, function () {
          data.add_process(new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Process */ .A(p.name, inputs, outputs, p.duration, check_add(p, function () {
            return data.factory_groups['' + p.factory_group];
          })));
        });
      };
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _ret = _loop2();
        if (_ret === "continue") continue;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(raw.factory_types.map(function (f) {
        return [f, new _structures_js__WEBPACK_IMPORTED_MODULE_2__/* .Factory */ .F('' + f.id, '' + f.name, f.factory_groups.map(function (id) {
          return data.factory_groups[id];
        }), f.duration_modifier, f.output_modifier)];
      })),
      _step3;
    try {
      var _loop3 = function _loop3() {
        var ff = _step3.value;
        check_add(ff[0], function () {
          return data.add_factory(ff[1]);
        });
      };
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        _loop3();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return data;
  });
}


/***/ }),

/***/ 4700:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var _structures_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6968);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Item = /*#__PURE__*/function () {
  function Item(id, name, group) {
    _classCallCheck(this, Item);
    (0,_structures_base_js__WEBPACK_IMPORTED_MODULE_0__/* .check */ .B)('id', id, 'name', name);
    this.id = id;
    this.name = name;
    this.group = group;
  }
  _createClass(Item, [{
    key: "toString",
    value: function toString() {
      return 'Item: [name: ' + this.name + ', group: ' + this.group + ']';
    }
  }]);
  return Item;
}();


/***/ }),

/***/ 8704:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_basic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8269);

var data_p = (0,_data_basic_js__WEBPACK_IMPORTED_MODULE_0__/* .data_from_standard_json */ .v)('Satisfactory', '0.0.1', __webpack_require__.e(/* import() */ 9918).then(__webpack_require__.t.bind(__webpack_require__, 9918, 17)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (await data_p);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);