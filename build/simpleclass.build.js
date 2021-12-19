"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _privateX = /*#__PURE__*/new WeakMap();

var _privateMethod = /*#__PURE__*/new WeakSet();

var SimpleClass = /*#__PURE__*/function () {
  // define private members
  function SimpleClass() {
    _classCallCheck(this, SimpleClass);

    _classPrivateMethodInitSpec(this, _privateMethod);

    _classPrivateFieldInitSpec(this, _privateX, {
      writable: true,
      value: 0
    });

    // declare public members
    this.a = 10;
    this.b = 20;

    _classPrivateFieldSet(this, _privateX, 100);
  } // public method


  _createClass(SimpleClass, [{
    key: "printMembers",
    value: function printMembers() {
      console.log("a = ".concat(this.a, " and b = ").concat(this.b, " and private member = ").concat(_classPrivateFieldGet(this, _privateX)));

      _classPrivateMethodGet(this, _privateMethod, _privateMethod2).call(this);
    } // private methods

  }, {
    key: "X",
    get: // read and return value of private member of the class
    function get() {
      return _classPrivateFieldGet(this, _privateX);
    },
    set: // get and set properties
    // set value for the private member of the class
    function set(val) {
      _classPrivateFieldSet(this, _privateX, val);
    }
  }]);

  return SimpleClass;
}();

function _privateMethod2() {
  console.log("I am a private method");
}

var obj = new SimpleClass();
obj.printMembers();
obj.X = 9000;
console.log('====================================');
console.log("X = ".concat(obj.X));
console.log('====================================');
