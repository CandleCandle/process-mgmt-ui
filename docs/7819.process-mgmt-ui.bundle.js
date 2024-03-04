(self["webpackChunkprocess_mgmt_ui"] = self["webpackChunkprocess_mgmt_ui"] || []).push([[7819],{

/***/ 6949:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./active_mods.json": [
		2446,
		2446
	],
	"./assembling-machine.json": [
		5343,
		5343
	],
	"./boiler.json": [
		254,
		254
	],
	"./equipment-grid.json": [
		4596,
		4596
	],
	"./equipment.json": [
		4806,
		4806
	],
	"./fluid.json": [
		4064,
		4064
	],
	"./furnace.json": [
		8247,
		8247
	],
	"./generator.json": [
		8084,
		8084
	],
	"./inserter.json": [
		8732,
		8732
	],
	"./item.json": [
		3732,
		3732
	],
	"./lab.json": [
		2509,
		2509
	],
	"./mining-drill.json": [
		4563,
		4563
	],
	"./projectile.json": [
		9289,
		9289
	],
	"./reactor.json": [
		3850,
		3850
	],
	"./recipe.json": [
		7215,
		7215
	],
	"./resource.json": [
		3496,
		3496
	],
	"./rocket-silo.json": [
		9849,
		9849
	],
	"./solar-panel.json": [
		2294,
		2294
	],
	"./technology.json": [
		2460,
		2460
	],
	"./transport-belt.json": [
		8911,
		8911
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
webpackAsyncContext.id = 6949;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4214:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 9656:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4599);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (await (0,_data_base_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('factorio-ff-1.1.94', '0.0.1'));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 4599:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3658);
/* harmony import */ var _stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8604);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4700);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4214);
/* harmony import */ var _process_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1341);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var check_add = function check_add(item, fn) {
  try {
    return fn();
  } catch (error) {
    console.log("error processing item:", item);
    throw error;
  }
};
var add_item = function add_item(data, name, i18n) {
  if (!data.items[name]) {
    if (i18n) {
      data.add_item(new _item_js__WEBPACK_IMPORTED_MODULE_0__/* .Item */ .c(name, i18n));
    } else {
      data.add_item(new _item_js__WEBPACK_IMPORTED_MODULE_0__/* .Item */ .c(name, name));
      ;
    }
  }
  return data.items[name];
};
var get_ingredient_amount = function get_ingredient_amount(ingredient) {
  var amount = ingredient.amount;
  if (typeof amount === "undefined") {
    amount = (ingredient.amount_min + ingredient.amount_max) / 2;
  }
  var probability = ingredient.probability;
  if (probability) {
    amount = amount * probability;
  }
  return amount;
};
var convert_ingredient = function convert_ingredient(data, ingredient) {
  var amount = get_ingredient_amount(ingredient);
  if (ingredient.temperature) {
    return new _stack_js__WEBPACK_IMPORTED_MODULE_1__/* .Stack */ .K(data.items[ingredient.name + '_' + ingredient.temperature], amount);
  }
  return new _stack_js__WEBPACK_IMPORTED_MODULE_1__/* .Stack */ .K(data.items[ingredient.name], amount);
};
var _recipe_has_fluid_temperature = function _recipe_has_fluid_temperature(recipe) {
  var i = recipe.ingredients.some(function (ingredient) {
    return  false || ingredient.minimum_temperature || ingredient.maximum_temperature || ingredient.temperature;
  });
  var p = recipe.products.some(function (ingredient) {
    return  false || ingredient.minimum_temperature || ingredient.maximum_temperature || ingredient.temperature;
  });
  return i || p;
};
var _add_basic_recipe = function _add_basic_recipe(data, recipe) {
  recipe.ingredients.forEach(function (ingredient) {
    check_add([recipe, ingredient], function () {
      return add_item(data, ingredient.name);
    });
  });
  recipe.products.forEach(function (product) {
    check_add([recipe, product], function () {
      return add_item(data, product.name);
    });
  });
  check_add([recipe, recipe.category], function () {
    if (!data.factory_groups[recipe.category]) {
      data.add_factory_group(new _factory_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a(recipe.category));
    }
  });
  check_add(recipe, function () {
    data.add_process(new _process_js__WEBPACK_IMPORTED_MODULE_3__/* .Process */ .A(recipe.name, recipe.ingredients.map(function (i) {
      return convert_ingredient(data, i);
    }), recipe.products.map(function (i) {
      return convert_ingredient(data, i);
    }), recipe.energy, data.factory_groups[recipe.category]));
  });
};
var _hack_add_reactor = function _hack_add_reactor(data) {
  // reactor has C constant consumption (MW)
  // fuel cell has E energy (GJ)
  // e.g. breeder has 5MW consumption; breeder cell has 5GJ
  // therefore 5,000MJ / 5M(J/S) = 1000s to convert 1 breeder-fuel-cell into a used-up-breeder-fuel-cell

  // reactor[id].max_energy_usage = C
  // item[id].fuel_value = E
  // reactor[id].energy_source.burner.fuel_categories (set) tells us what types of fuel can be used
  // item[id].fuel_category tells us the category for that particular fuel.

  // uranium 40MW, 8GJ ==> 200s
  // breeder 5MW, 5GJ ==> 1000s
  // MOX 20MW, 20GJ ==> 1000s

  data.add_factory_group(new _factory_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a('basic-reactor'));
  data.add_factory_group(new _factory_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a('breeder-reactor'));
  data.add_factory_group(new _factory_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a('mox-reactor'));
  check_add('uranium-fuel-cell', function () {
    data.add_process(new _process_js__WEBPACK_IMPORTED_MODULE_3__/* .Process */ .A('burn-uranium-fuel-cell', [new _stack_js__WEBPACK_IMPORTED_MODULE_1__/* .Stack */ .K(data.items['uranium-fuel-cell'], 1)], [new _stack_js__WEBPACK_IMPORTED_MODULE_1__/* .Stack */ .K(data.items['used-up-uranium-fuel-cell'], 1)], 200, data.factory_groups['basic-reactor']));
  });
  check_add('breeder-fuel-cell', function () {
    data.add_process(new _process_js__WEBPACK_IMPORTED_MODULE_3__/* .Process */ .A('burn-breeder-fuel-cell', [new _stack_js__WEBPACK_IMPORTED_MODULE_1__/* .Stack */ .K(data.items['breeder-fuel-cell'], 1)], [new _stack_js__WEBPACK_IMPORTED_MODULE_1__/* .Stack */ .K(data.items['used-up-breeder-fuel-cell'], 1)], 1000, data.factory_groups['breeder-reactor']));
  });
  check_add('MOX-fuel', function () {
    data.add_process(new _process_js__WEBPACK_IMPORTED_MODULE_3__/* .Process */ .A('burn-MOX-fuel', [new _stack_js__WEBPACK_IMPORTED_MODULE_1__/* .Stack */ .K(data.items['MOX-fuel'], 1)], [new _stack_js__WEBPACK_IMPORTED_MODULE_1__/* .Stack */ .K(data.items['used-up-MOX-fuel'], 1)], 1000, data.factory_groups['mox-reactor']));
  });
  data.add_factory(new _factory_js__WEBPACK_IMPORTED_MODULE_2__/* .Factory */ .F('basic-reactor', 'basic-reactor', [data.factory_groups['basic-reactor']], 1));
  data.add_factory(new _factory_js__WEBPACK_IMPORTED_MODULE_2__/* .Factory */ .F('breeder-reactor', 'breeder-reactor', [data.factory_groups['breeder-reactor']], 1));
  data.add_factory(new _factory_js__WEBPACK_IMPORTED_MODULE_2__/* .Factory */ .F('mox-reactor', 'mox-reactor', [data.factory_groups['mox-reactor']], 1));
};
var _add_temperature_recipe = function _add_temperature_recipe(data, recipe, temperature_based_items) {
  check_add([recipe, recipe.category], function () {
    if (!data.factory_groups[recipe.category]) {
      data.add_factory_group(new _factory_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a(recipe.category));
    }
  });
  recipe.ingredients.forEach(function (ingredient) {
    if (ingredient.minimum_temperature || ingredient.maximum_temperature) {
      // pass; should already be added?
    } else {
      check_add([recipe, ingredient], function () {
        return add_item(data, ingredient.name);
      });
    }
  });
  recipe.products.forEach(function (product) {
    check_add([recipe, product], function () {
      return add_item(data, product.name);
    });
  });
  var ingredient_variations = cross_product_ingredients(data, recipe.ingredients, temperature_based_items);
  check_add(recipe, function () {
    ingredient_variations.forEach(function (variation, idx) {
      data.add_process(new _process_js__WEBPACK_IMPORTED_MODULE_3__/* .Process */ .A(recipe.name + '--' + idx, variation, recipe.products.map(function (i) {
        return convert_ingredient(data, i);
      }), recipe.energy, data.factory_groups[recipe.category]));
    });
  });
};
var compute_permutations = function compute_permutations(input, out) {
  if (input.length == 0) return out;
  var entry = input.shift();
  if (out) {
    var r = [];
    out.forEach(function (o) {
      entry.forEach(function (e) {
        r.push(o.concat(e));
      });
    });
    return compute_permutations(input, r);
  } else {
    return compute_permutations(input, entry.map(function (e) {
      return [e];
    }));
  }
};
var cross_product_ingredients = function cross_product_ingredients(data, ingredients, temperature_based_items) {
  var ingredients_with_temperature_lists = ingredients.map(function (i) {
    if (i.minimum_temperature || i.maximum_temperature) {
      var stack_in_range = Object.keys(temperature_based_items[i.name]).filter(function (t) {
        return i.minimum_temperature <= t && t <= i.maximum_temperature;
      }).map(function (t) {
        return temperature_based_items[i.name][t];
      }).map(function (item) {
        return new _stack_js__WEBPACK_IMPORTED_MODULE_1__/* .Stack */ .K(item, get_ingredient_amount(i));
      });
      return stack_in_range;
    } else {
      return [convert_ingredient(data, i)];
    }
  });
  var permutations = compute_permutations(ingredients_with_temperature_lists.map(function (ingredient_list) {
    var r = [];
    for (var i = 0; i < ingredient_list.length; ++i) r.push(i);
    return r;
  })).map(function (permutation) {
    return permutation.map(function (val, idx) {
      return ingredients_with_temperature_lists[idx][val];
    });
  });
  return permutations;
};
var add_factory_groups = function add_factory_groups(data, group) {
  Object.values(group).forEach(function (factory) {
    check_add([factory, factory.crafting_categories], function () {
      Object.keys(factory.crafting_categories).forEach(function (category_name) {
        if (!data.factory_groups[category_name]) {
          data.add_factory_group(new _factory_js__WEBPACK_IMPORTED_MODULE_2__/* .FactoryGroup */ .a(category_name));
        }
      });
    });
    check_add(factory, function () {
      data.add_factory(new _factory_js__WEBPACK_IMPORTED_MODULE_2__/* .Factory */ .F(factory.name, factory.name, Object.keys(factory.crafting_categories).map(function (c) {
        return data.factory_groups[c];
      }), 1 / factory.crafting_speed));
    });
  });
};
var _add_temperature_based_item = function _add_temperature_based_item(temperature_based_items, product, item) {
  if (!!!temperature_based_items[product.name]) {
    temperature_based_items[product.name] = {};
  }
  temperature_based_items[product.name][product.temperature] = item;
};
function create_data(_x, _x2) {
  return _create_data.apply(this, arguments);
}
function _create_data() {
  _create_data = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(game, version) {
    var data_p, groups_p;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          data_p = __webpack_require__.e(/* import() */ 7215).then(__webpack_require__.t.bind(__webpack_require__, 7215, 17))["catch"](function (e) {
            console.log('failed to read recipe.json:', e);
          }).then(function (m) {
            return m["default"];
          }).then(function (recipe_raw) {
            var data = new _data_js__WEBPACK_IMPORTED_MODULE_4__/* .Data */ .V(game, version);
            var temperature_based_items = {}; // [base name][temperature] => Item

            // enumerate all possible temperatures for fluids.
            // create temperature based items for each.

            Object.values(recipe_raw).forEach(function (recipe) {
              if (!Array.isArray(recipe.ingredients)) recipe.ingredients = [];
              if (!Array.isArray(recipe.products)) recipe.products = [];
              recipe.products.forEach(function (product) {
                if (product.temperature) {
                  var temp = product.temperature;
                  var item = check_add([recipe, product], function () {
                    return add_item(data, product.name + "_" + temp, product.name + " (" + temp + ")");
                  });
                  _add_temperature_based_item(temperature_based_items, product, item);
                } else {
                  check_add([recipe, product], function () {
                    return add_item(data, product.name);
                  });
                }
              });
            });

            // if a process has one of the temperature fluids as an input then create multiple variants

            Object.values(recipe_raw).forEach(function (recipe) {
              check_add(recipe, function () {
                if (!Array.isArray(recipe.ingredients)) recipe.ingredients = [];
                if (!Array.isArray(recipe.products)) recipe.products = [];
                recipe.ingredients.forEach(function (i) {
                  if (i.temperature) {
                    i.minimum_temperature = i.temperature;
                    i.maximum_temperature = i.temperature;
                  }
                  if (i.minimum_temperature > -1e+207) {
                    var temp = i.minimum_temperature;
                    var item = check_add([recipe, i], function () {
                      return add_item(data, i.name + "_" + temp, i.name + " (" + temp + ")");
                    });
                    _add_temperature_based_item(temperature_based_items, i, item);
                  }
                  if (i.maximum_temperature < 1e+207) {
                    var _temp = i.maximum_temperature;
                    var _item = check_add([recipe, i], function () {
                      return add_item(data, i.name + "_" + _temp, i.name + " (" + _temp + ")");
                    });
                    _add_temperature_based_item(temperature_based_items, i, _item);
                  }
                });
                if (_recipe_has_fluid_temperature(recipe)) {
                  _add_temperature_recipe(data, recipe, temperature_based_items);
                } else {
                  _add_basic_recipe(data, recipe);
                }
              });
            });
            _hack_add_reactor(data);
            return data;
          });
          groups_p = ['assembling-machine.json', 'furnace.json', 'rocket-silo.json'].map(function (f) {
            return __webpack_require__(6949)("./" + f).then(function (m) {
              return m["default"];
            })["catch"](function (e) {
              return console.error('failed to read .json:', f, e);
            });
          });
          return _context.abrupt("return", Promise.all([data_p].concat(_toConsumableArray(groups_p))).then(function (arr) {
            var data = arr.shift();
            arr.forEach(function (g) {
              add_factory_groups(data, g);
            });
            return data;
          }));
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _create_data.apply(this, arguments);
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create_data);

/***/ }),

/***/ 4700:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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