"use strict";
(self["webpackChunkprocess_mgmt_ui"] = self["webpackChunkprocess_mgmt_ui"] || []).push([[7876],{

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

/***/ 3968:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structures_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4214);
/* harmony import */ var _structures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4700);
/* harmony import */ var _structures_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3658);
/* harmony import */ var _structures_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1341);
/* harmony import */ var _structures_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8604);

var data = new _structures_js__WEBPACK_IMPORTED_MODULE_0__/* .Data */ .V('factorio-ab', '0.0.1');
var mineable_ores = ['saphirite', 'stiratite', 'rubyte', 'bobmonium', 'crotinnium', 'jivolite'];
mineable_ores.forEach(function (ore) {
  data.add_item(new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('ore_' + ore, ore + ' ore'));
  data.add_item(new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('crushed_' + ore, ore + ' crushed'));
  data.add_item(new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('chunks_' + ore, ore + ' chunks'));
});
data.add_items([new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('crushed_stone', 'crushed stone'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('sludge_mineral', 'mineral sludge'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('catalyst_mineral', 'mineral catalyst'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('catalyst_crystal', 'crystal catalyst'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('catalyst_hybrid', 'hybrid catalyst'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('water_purified', 'purified water'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('water_mineralized', 'mineralised water'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('water_waste_sulfuric', 'sulphuric waste water'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('slurry_slag', 'slag slurry'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('sulfur', 'sulphur'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('acid_sulfuric', 'sulphuric acid'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('gas_sulfur_dioxide', 'sulphur dioxide gas'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('gas_oxygen', 'oxygen gas'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('ore_iron', 'iron ore'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('ore_copper', 'copper ore'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('iron_plate', 'iron plate'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('copper_plate', 'copper plate'), new _structures_js__WEBPACK_IMPORTED_MODULE_1__/* .Item */ .c('circuit', 'circuit')]);
var items = data.items;
data.add_factory_groups([new _structures_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a('crusher'), new _structures_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a('sorter'), new _structures_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a('smelter'), new _structures_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a('crystallizer'), new _structures_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a('filtration_unit'), new _structures_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a('liquifier'), new _structures_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a('assembler'), new _structures_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a('chemical_plant'), new _structures_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a('hydro_plant')]);
var factory_groups = data.factory_groups;
data.add_processes([[items.ore_saphirite, items.crushed_saphirite], [items.ore_stiratite, items.crushed_stiratite], [items.ore_rubyte, items.crushed_rubyte], [items.ore_bobmonium, items.crushed_bobmonium], [items.ore_crotinnium, items.crushed_crotinnium], [items.ore_jivolite, items.crushed_jivolite]].map(function (i) {
  return new _structures_js__WEBPACK_IMPORTED_MODULE_3__/* .Process */ .A(i[0].id + '_crushing', [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(i[0], 2)], [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(i[1], 2), new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.crushed_stone, 1)], 1, factory_groups.crusher);
}));
data.add_processes([new _structures_js__WEBPACK_IMPORTED_MODULE_3__/* .Process */ .A('slag_slurry_from_crushed_stone', [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.crushed_stone, 25), new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.acid_sulfuric, 15)], [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.slurry_slag, 50)], 1, factory_groups.liquifier), new _structures_js__WEBPACK_IMPORTED_MODULE_3__/* .Process */ .A('mineral_sludge_from_slag_slurry', [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.slurry_slag, 50), new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.water_purified, 50)],
//TODO add the filter frames.
[new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.sludge_mineral, 50), new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.water_waste_sulfuric, 40)], 1, factory_groups.filtration_unit), new _structures_js__WEBPACK_IMPORTED_MODULE_3__/* .Process */ .A('mineral_catalyst', [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.sludge_mineral, 25)], [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.catalyst_mineral, 2)], 1, factory_groups.crystallizer)]);
data.add_processes([new _structures_js__WEBPACK_IMPORTED_MODULE_3__/* .Process */ .A('iron_ore_by_sorting', [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.catalyst_mineral, 1), new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.crushed_saphirite, 2), new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.crushed_jivolite, 2)], [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.ore_iron, 4)], 1, factory_groups.sorter)]);
data.add_processes([new _structures_js__WEBPACK_IMPORTED_MODULE_3__/* .Process */ .A('acid_sulfuric', [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.gas_sulfur_dioxide, 90), new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.water_purified, 40)], [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.acid_sulfuric, 60)], 1, factory_groups.chemical_plant), new _structures_js__WEBPACK_IMPORTED_MODULE_3__/* .Process */ .A('gas_sulfur_dioxide', [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.sulfur, 1), new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.gas_oxygen, 60)], [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.gas_sulfur_dioxide, 60)], 1, factory_groups.chemical_plant), new _structures_js__WEBPACK_IMPORTED_MODULE_3__/* .Process */ .A('waste_water_purification_sulfuric', [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.water_waste_sulfuric, 100)], [new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.sulfur, 1), new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.water_purified, 70), new _structures_js__WEBPACK_IMPORTED_MODULE_4__/* .Stack */ .K(items.water_mineralized, 20)], 1, factory_groups.hydro_plant)]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

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