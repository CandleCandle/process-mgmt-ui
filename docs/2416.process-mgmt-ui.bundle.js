"use strict";
(self["webpackChunkprocess_mgmt_ui"] = self["webpackChunkprocess_mgmt_ui"] || []).push([[2416],{

/***/ 4214:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Data)
/* harmony export */ });
/* harmony import */ var _structures_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6968);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
      var _this = this;
      items.forEach(function (i) {
        return _this.add_item(i);
      });
    }
  }, {
    key: "add_factory_groups",
    value: function add_factory_groups(factory_groups) {
      var _this2 = this;
      factory_groups.forEach(function (f) {
        return _this2.add_factory_group(f);
      });
    }
  }, {
    key: "add_factories",
    value: function add_factories(factories) {
      var _this3 = this;
      factories.forEach(function (f) {
        return _this3.add_factory(f);
      });
    }
  }, {
    key: "add_processes",
    value: function add_processes(processes) {
      var _this4 = this;
      processes.forEach(function (p) {
        return _this4.add_process(p);
      });
    }
  }]);
  return Data;
}();


/***/ }),

/***/ 5410:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3658);
/* harmony import */ var _stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8604);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4700);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4214);
/* harmony import */ var _process_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1341);





var raw = require('./exported-data.json');
var fix_identifier = function fix_identifier(id) {
  return id.replace(/-/g, '_');
};
var check_add = function check_add(item, fn) {
  try {
    return fn();
  } catch (error) {
    console.log('error processing item:', item);
    throw error;
  }
};
var convert_ingredient = function convert_ingredient(ingredient, recipe) {
  var ingredient_name = fix_identifier(ingredient.name);
  var amount = ingredient.amount;
  var probability = ingredient.probability;
  if (typeof amount === 'undefined') {
    amount = (ingredient.amount_min + ingredient.amount_max) / 2;
  }
  if (probability) {
    amount = amount * probability;
  }
  return check_add(recipe, function () {
    return new _stack_js__WEBPACK_IMPORTED_MODULE_0__/* .Stack */ .K(data.items[ingredient_name], amount);
  });
};
var data_p = __webpack_require__.e(/* import() */ 1628).then(__webpack_require__.t.bind(__webpack_require__, 1628, 17)).then(function (module) {
  return module["default"];
}).then(function (raw) {
  var data = new _data_js__WEBPACK_IMPORTED_MODULE_1__/* .Data */ .V('factorio-ab-01', '0.0.1');
  raw.recipes.forEach(function (recipe) {
    if (!recipe.name) return; // ignore '{}'
    check_add(recipe, function () {
      var name = fix_identifier(recipe.name);
      recipe.ingredients.forEach(function (ing) {
        var ing_name = fix_identifier(ing.name);
        if (!data.items[ing_name]) {
          data.add_item(new _item_js__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .c(ing_name, ing_name));
        }
      });
    });
    recipe.products.forEach(function (ing) {
      var ing_name = fix_identifier(ing.name);
      if (!data.items[ing_name]) {
        check_add(recipe, function () {
          return data.add_item(new _item_js__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .c(ing_name, ing_name));
        });
      }
    });
    var inputs = recipe.ingredients.map(function (ing) {
      return convert_ingredient(ing, recipe);
    });
    var outputs = recipe.products.map(function (ing) {
      return convert_ingredient(ing, recipe);
    }).reduce(function (acc, cur) {
      // collect outputs of processes that output the same type multiple times.
      if (acc[cur.item.id]) {
        acc[cur.item.id] = acc[cur.item.id].add(cur);
      } else {
        acc[cur.item.id] = cur;
      }
      return acc;
    }, {});
    outputs = Object.values(outputs);
    var category = fix_identifier(recipe.category);
    if (!data.factory_groups[category]) {
      check_add(recipe, function () {
        return data.add_factory_group(new _factory_js__WEBPACK_IMPORTED_MODULE_3__/* .FactoryGroup */ .a(category));
      });
    }
    data.add_process(new _process_js__WEBPACK_IMPORTED_MODULE_4__/* .Process */ .A(fix_identifier(recipe.name), inputs, outputs, recipe.energy === 0 ? 0.1 : recipe.energy, data.factory_groups[category]));
  });
  raw.craftingMachines.forEach(function (machine) {
    if (!machine.name) return; // ignore '{}'
    check_add(machine, function () {
      Object.keys(machine.categories).forEach(function (cat) {
        var category_name = fix_identifier(cat);
        if (!data.factory_groups[category_name]) {
          data.add_factory_group(new _factory_js__WEBPACK_IMPORTED_MODULE_3__/* .FactoryGroup */ .a(category_name));
        }
      });
      var machine_name = fix_identifier(machine.name);
      data.add_factory(new _factory_js__WEBPACK_IMPORTED_MODULE_3__/* .Factory */ .F(machine_name, machine_name, Object.keys(machine.categories).map(function (cat) {
        return fix_identifier(cat);
      }).map(function (cat) {
        return data.factory_groups[cat];
      }), 1 / machine.craftingSpeed));
    });
  });
  return data;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (await data_p);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

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


/***/ })

}]);