"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AbstractClass = /*#__PURE__*/function () {
  function AbstractClass(x, y) {
    _classCallCheck(this, AbstractClass);

    this.n1 = x;
    this.n2 = y;

    if ((this instanceof AbstractClass ? this.constructor : void 0) === AbstractClass) {
      throw new TypeError('This class can not be instantiated.....');
    }
  }

  _createClass(AbstractClass, [{
    key: "baseMethod",
    value: function baseMethod() {
      console.log('I am a method from the base class');
    }
  }, {
    key: "power",
    value: function power() {
      return Math.pow(this.n1, this.n2);
    }
  }]);

  return AbstractClass;
}(); // derive the class


var DerivedClass = /*#__PURE__*/function (_AbstractClass) {
  _inherits(DerivedClass, _AbstractClass);

  var _super = _createSuper(DerivedClass);

  function DerivedClass(a, b) {
    _classCallCheck(this, DerivedClass);

    return _super.call(this, a, b); // access the base class constructor()
  }

  _createClass(DerivedClass, [{
    key: "deriveMethod",
    value: function deriveMethod() {
      console.log('I am a method from the derived class');
    }
  }]);

  return DerivedClass;
}(AbstractClass);

var obj = new DerivedClass(5, 10);
obj.baseMethod(); // access the method from the base class

console.log("Power = ".concat(obj.power()));
obj.deriveMethod(); // force fully try to create an instance of the Abstract class

var obj1 = new AbstractClass(300, 400);
