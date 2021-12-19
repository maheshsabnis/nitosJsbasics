"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MyClass = /*#__PURE__*/function () {
  function MyClass() {
    _classCallCheck(this, MyClass);
  }

  _createClass(MyClass, [{
    key: "add1",
    value: function add1(a, b) {
      console.log('2 Parameters');
      console.log("Length of Parameters = ".concat(arguments.length));
      return a + b;
    }
  }, {
    key: "add",
    value: function add(a, b, c) {
      console.log('3 Parameters');
      console.log("Length of Parameters = ".concat(arguments.length));
      return a + b + c;
    }
  }, {
    key: "getSum",
    value: function getSum(values) {
      var sum = 0;

      if (values.length > 0) {
        values.forEach(function (v, id) {
          sum += v;
        });
      }

      return sum;
    } // using spread for dynamic number of arguments to a method

  }, {
    key: "getSumSpread",
    value: function getSumSpread() {
      var sum = 0;

      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      if (values.length > 0) {
        values.forEach(function (v, id) {
          sum += v;
        });
      }

      return sum;
    }
  }]);

  return MyClass;
}();

var obj = new MyClass();
console.log("Add 2 =  ".concat(obj.add1(2, 3))); // NaN

console.log("Add 3 =  ".concat(obj.add(2, 3, 4)));
console.log("2 Parameters = ".concat(obj.getSum([1, 2]))); // 1 Parameter of Array Type

console.log("3 Parameters = ".concat(obj.getSum([1, 2, 3]))); // 1 Parameter of Array Type

console.log("4 Parameters = ".concat(obj.getSum([1, 2, 3, 4]))); // 1 Parameter of Array Type

console.log("5 Parameters = ".concat(obj.getSum([1, 2, 3, 4, 5]))); // 1 Parameter of Array Type

console.log("2 Parameters = ".concat(obj.getSumSpread(1, 2)));
console.log("3 Parameters = ".concat(obj.getSumSpread(1, 2, 3)));
console.log("4 Parameters = ".concat(obj.getSumSpread(1, 2, 3, 4)));
console.log("5 Parameters = ".concat(obj.getSumSpread(1, 2, 3, 4, 5)));
console.log("6 Parameters = ".concat(obj.getSumSpread(1, 2, 3, 4, 5, 6)));
