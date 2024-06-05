/**
 * @class
 * what is javascript, ECMAScript
 * javascript vs. nodejs vs. ECMAScript
 *
 * Primitive Data
 * Object Data or reference Data
 *
 * coercion
 * equality == vs. ===
 *
 * var vs. let vs. const
 * mutable and inmutable
 *
 * oop: Object oriented programming in JS
 * encapsulation; inheritance; Poly-morph-ism; abstraction;
 * constructer function, prototype chain
 *
 * @class
 * loop in JS: array, object
 * MyForeach, MyMap, MyFilter, MyReduce
 *
 * destructure
 *
 * rest parameter vs. spread operator
 *
 * object copy
 *
 * @class
 * iife
 * closure
 * currying
 *
 * this
 * call, apply, bind
 *
 * arrow function
 *
 * event loop
 *
 * @class
 * XHR
 * callback function; callback hell
 * Promise
 * MyPromise
 * MyFetch
 *
 * @class
 * todolist:
 *   MVC
 *   NodeList vs. HTMLCollection
 *   Event bubbling
 *
 */
// // wrap
// (function(exports, require, module, __filename, __dirname) {
// var a = undefined;
// console.log(global.a);
// console.log(a);
// if (true) {
//   // (function() {
//     var a = 123;
//   // })();
// console.log(a);
// if (true) {
// (function() {
// })();
// }
// console.log(a);
// const a = 123;
// })()
// // * Primitive Data: string, number, boolean, undefined, null, symbol
// // transfer by value;
// var str = 'ABC';
// var trr = str;
// str = 'cvb';
// console.log(trr);

// // * Object Data or reference Data: Object, Array,
// var arr = [123, 456];
// var wrr = arr;
// arr[1] = 123;
// console.log(wrr);

// // * coercion
// console.log(typeof (true + 1 + '12')); // 'hello' + 'world'
// console.log(true / 2);

// // * equality == vs. ===
// console.log(1 == '1');

// // * truthy and falsy;
// // console.log(NaN == NaN);
// // 1, 0, -1, NaN, '', ' ' trim()
// // console.log(typeof !!arr)
// if (!!arr) {
//   console.log('Hello World!');
// }

// * var, let, const: ES6
//        scope, hoisting, reassign
// var    function, yes,  yes
// let    block, -,  yes
// const    block, -,  no, -----> obj, arr

// const a = 21;
// a = 123;

// const a = 123;
// mutable vs. inmutable
// // mutable:
// const obj = {
//   name: 'Dio',
// }
// obj.name = 'Jojo';
// //inmutable
// let obj1 = {
//   name: 'Dio',
// }
// obj1 = {...obj1};

// var a = 'help';
// console.log(global.a);
// module.exports.a = a;
// console.log(module.exports.a);

// * oop: Object oriented programming in JS： class <---- ES6
// * encapsulation; inheritance; Poly-morph-ism; abstraction;
// * constructer function, prototype chain

// * class base
// class Person {
// 	#name = "Person";
// 	_age;

// 	get name() {
// 		return this.#name;
// 	}
// 	set name(newname) {
// 		console.log("hello from Antra"); // trigger the rerender;
// 		this.#name = newname;
// 	}

// 	constructor(n, age) {
// 		this.#name = n;
// 		this._age = age;
// 	}
// 	sayHello() {
// 		console.log(this.#name + ": Hello!");
// 	}
// 	static sayHello() {
// 		new Person("Jack", 12).sayHello();
// 	}
// }

// class Employee extends Person {
// 	constructor(name, age, company) {
// 		super(name, age);
// 		this.company = company;
// 	}
//   printCompany = function() {
//     console.log(this.company);
//   }
// }

// // * in function base;
// function Person(n, age) {
// 	this.n = n;
// 	this.age = age;
// }
// Person.prototype.sayHello = function () {
// 	console.log(this.n + ": Hello!");
// };

// function Employee(name, age, company) {
// 	Person.call(this, name, age); // * <----------- call, apply, bind
// 	this.company = company;
// }
// Employee.prototype = Object.create(Person.prototype); // chain, inheritance
// // Employee.prototype = { ...Person.prototype };
// // Employee.prototype.__proto__ = Person.prototype;

// Person.prototype.hi = function () {
// 	console.log("hi");
// };

// Employee.prototype.sayHello = function(mm) {
//   console.log('hihi', mm);
// }
// Employee.prototype.constructor = Employee;
// console.log(Employee.prototype.constructor);

// Employee.prototype.hello = function() {
//   console.log('hello');
// }

// function Array() {
//   Object.call(this, ...);
// }

// Person.sayHello = function () {
// 	new Person("Jack", 12).sayHello();
// };
// Object.defineProperty(Person.prototype, "n", {
// 	get: function () {
// 		return this.name;
// 	},
// 	set: function (newname) {
// 		console.log("hello from Antra"); // trigger the rerender;
// 		this.name = newname;
// 	},
// });

// const p = new Person("Dio", 220);
// const e = new Employee("Jojo", 20, "Jump");
// console.log(e);
// e.hi();
// p.hihi();

// p.sayHello();
// Person.sayHello();
// console.log(p, j);

// p.n = "David";
// console.log(p.n);

// p.name = 'hihi';
// // p.name('hello');
// console.log(p.name);

// p.#name = 'hello';
// console.log(p.name, Person.name);
// p.sayHello();
// j.sayHello();

// Person.sayHello();

// const num = Math.max(12, 123);

// const arr = new Object(); // []

// * ~~~~~~~~~~~~~~~~~~~~~~ Day 2
// * loop in JS: array, object

const arr = ["3", 15, 2, 31, 51]; // new Array(); {0: 3, ...}
// for (let i = arr.length - 1; i <= 0; i - 2) {
// }

// for (const ele of arr) {
//   if (+ele === 3) {
//     break;
//   }
//   console.log(ele);
// } // break, continue;

// for (const ele in obj) {
//   console.log(obj[ele]);
// }

// Array.prototype.myForEach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb.call(thisOptions, this[i], i, this);
// 	}
// };
// arr.myForEach(function (ele, i, self) {
//   console.log(ele, i, self);
//   console.log(this.args);
// }, {args: [1, 2, 3]});

// * filter, map, includes, indexOf, myReduce, slice, splice
// const str = 'abc'; // 'aabbcc';
// const res = str.split('').reduce(function(acc, cur, i, self) {
//   acc[cur] = cur;
//   return acc;
// }, {}) // ['a', 'b', 'c'];
// {
//   a: a,
//   b: b
// }
// console.log(res);

// const nums = [175, 50, 25];
// function myFunc(acc, cur, i) {
//   console.log('index: ', i);
//   return acc - cur;
// }
// console.log(nums.reduce(myFunc, 0));

const obj = {
  age: 200,
  name: "Dio",
  arr: ["key", "val"],
};
// // Object.keys(obj).map(ele => {

// // })
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// Object.entries(obj).forEach(([key, val]) => {
//   console.log('key: ', key);
//   console.log('val: ', val);
// });

// * MyForeach, MyMap, MyFilter, MyReduce
// *
// * destructure
const [a, _, b] = [1, 2, 3, 4];
const {
  name: myName,
  age,
  arr: [k, v],
} = obj;

// import {Componen: hello, Module: view} from '@angular/core';
// *
// * rest parameter vs. spread operator
function foo() {
  console.log;
}

// *
// * object copy






------------------------------------------------------------------------
/**
 * @class
 * what is javascript, ECMAScript
 * javascript vs. nodejs vs. ECMAScript
 *
 * Primitive Data
 * Object Data or reference Data
 *
 * coercion
 * equality == vs. ===
 *
 * var vs. let vs. const
 * mutable and inmutable
 *
 * oop: Object oriented programming in JS
 * encapsulation; inheritance; Poly-morph-ism; abstraction;
 * constructer function, prototype chain
 *
 * @class
 * loop in JS: array, object
 * MyForeach, MyMap, MyFilter, MyReduce
 *
 * destructure
 *
 * rest parameter vs. spread operator
 *
 * object copy
 *
 * @class
 * iife
 * closure
 * currying
 *
 * this
 * call, apply, bind
 *
 * arrow function
 *
 * event loop
 *
 * @class
 * XHR
 * callback function; callback hell
 * Promise
 * MyPromise
 * MyFetch
 *
 * @class
 * todolist:
 *   MVC
 *   NodeList vs. HTMLCollection
 *   Event bubbling
 *
 */
// // wrap
// (function(exports, require, module, __filename, __dirname) {
// var a = undefined;
// console.log(global.a);
// console.log(a);
// if (true) {
//   // (function() {
//     var a = 123;
//   // })();
// console.log(a);
// if (true) {
// (function() {
// })();
// }
// console.log(a);
// const a = 123;
// })()
// // * Primitive Data: string, number, boolean, undefined, null, symbol
// // transfer by value;
// var str = 'ABC';
// var trr = str;
// str = 'cvb';
// console.log(trr);

// // * Object Data or reference Data: Object, Array,
// var arr = [123, 456];
// var wrr = arr;
// arr[1] = 123;
// console.log(wrr);

// // * coercion
// console.log(typeof (true + 1 + '12')); // 'hello' + 'world'
// console.log(true / 2);

// // * equality == vs. ===
// console.log(1 == '1');

// // * truthy and falsy;
// // console.log(NaN == NaN);
// // 1, 0, -1, NaN, '', ' ' trim()
// // console.log(typeof !!arr)
// if (!!arr) {
//   console.log('Hello World!');
// }

// * var, let, const: ES6
//        scope, hoisting, reassign
// var    function, yes,  yes
// let    block, -,  yes
// const    block, -,  no, -----> obj, arr

// const a = 21;
// a = 123;

// const a = 123;
// mutable vs. inmutable
// // mutable:
// const obj = {
//   name: 'Dio',
// }
// obj.name = 'Jojo';
// //inmutable
// let obj1 = {
//   name: 'Dio',
// }
// obj1 = {...obj1};

// var a = 'help';
// console.log(global.a);
// module.exports.a = a;
// console.log(module.exports.a);

// * oop: Object oriented programming in JS： class <---- ES6
// * encapsulation; inheritance; Poly-morph-ism; abstraction;
// * constructer function, prototype chain

// * class base
// class Person {
// 	#name = "Person";
// 	_age;

// 	get name() {
// 		return this.#name;
// 	}
// 	set name(newname) {
// 		console.log("hello from Antra"); // trigger the rerender;
// 		this.#name = newname;
// 	}

// 	constructor(n, age) {
// 		this.#name = n;
// 		this._age = age;
// 	}
// 	sayHello() {
// 		console.log(this.#name + ": Hello!");
// 	}
// 	static sayHello() {
// 		new Person("Jack", 12).sayHello();
// 	}
// }

// class Employee extends Person {
// 	constructor(name, age, company) {
// 		super(name, age);
// 		this.company = company;
// 	}
//   printCompany = function() {
//     console.log(this.company);
//   }
// }

// // * in function base;
// function Person(n, age) {
// 	this.n = n;
// 	this.age = age;
// }
// Person.prototype.sayHello = function () {
// 	console.log(this.n + ": Hello!");
// };

// function Employee(name, age, company) {
// 	Person.call(this, name, age); // * <----------- call
//   Person.apply(this, [name, age]); // * <----------- apply
//   const constructer = Person.bind(this); // * <----------- bind
//   constructer(name, age);
// 	this.company = company;
// }
// Employee.prototype = Object.create(Person.prototype); // chain, inheritance
// // Employee.prototype = { ...Person.prototype };
// // Employee.prototype.__proto__ = Person.prototype;

// Person.prototype.hi = function () {
// 	console.log("hi");
// };

// Employee.prototype.sayHello = function(mm) {
//   console.log('hihi', mm);
// }
// Employee.prototype.constructor = Employee;
// console.log(Employee.prototype.constructor);

// Employee.prototype.hello = function() {
//   console.log('hello');
// }

// function Array() {
//   Object.call(this, ...);
// }

// Person.sayHello = function () {
// 	new Person("Jack", 12).sayHello();
// };
// Object.defineProperty(Person.prototype, "n", {
// 	get: function () {
// 		return this.name;
// 	},
// 	set: function (newname) {
// 		console.log("hello from Antra"); // trigger the rerender;
// 		this.name = newname;
// 	},
// });

// const p = new Person("Dio", 220);
// const e = new Employee("Jojo", 20, "Jump");
// console.log(e);
// e.hi();
// p.hihi();

// p.sayHello();
// Person.sayHello();
// console.log(p, j);

// p.n = "David";
// console.log(p.n);

// p.name = 'hihi';
// // p.name('hello');
// console.log(p.name);

// p.#name = 'hello';
// console.log(p.name, Person.name);
// p.sayHello();
// j.sayHello();

// Person.sayHello();

// const num = Math.max(12, 123);

// const arr = new Object(); // []

// * ~~~~~~~~~~~~~~~~~~~~~~ Day 2
// * loop in JS: array, object

// const arr = ["3", 15, 2, 31, 51]; // new Array(); {0: 3, ...}
// for (let i = arr.length - 1; i <= 0; i - 2) {
// }

// for (const ele of arr) {
//   if (+ele === 3) {
//     break;
//   }
//   console.log(ele);
// } // break, continue;

// for (const ele in obj) {
//   console.log(obj[ele]);
// }

// Array.prototype.myForEach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb.call(thisOptions, this[i], i, this);
// 	}
// };
// arr.myForEach(function (ele, i, self) {
//   console.log(ele, i, self);
//   console.log(this.args);
// }, {args: [1, 2, 3]});

// * filter, map, includes, indexOf, myReduce, slice, splice
// Array.prototype.mySlick = function (start, end) {
// 	const res = [];
// 	const len = this.length;

// 	start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);

//   if (end === undefined || end > len) {
//     end = len;
//   } else if (end < 0) {
//     end = len + end;
//   } else {
//     end = end;
//   }

// 	for (let i = start; i < end; i++) {
// 		res.push(this[i]);
// 	}

// 	return res;
// };
// Array.prototype.mySplice = function (start, rNum, ...items) {
// 	const res = [];
// 	if (start < 0) {
// 		start = this.length + start;
// 	}
// 	for (let i = start; i < start + rNum; i++) {
// 		res.push(this[i]);
// 		delete this[i];
// 	}

// 	const tempArray = [];
// 	for (let i = 0; i < start; i++) {
// 		tempArray.push(this[i]);
// 	}
// 	for (let i = 0; i < items.length; i++) {
// 		tempArray.push(items[i]);
// 	}
// 	for (let i = start + rNum; i < this.length; i++) {
// 		tempArray.push(this[i]);
// 	}

// 	this.length = 0;
// 	for (let i = 0; i < tempArray.length; i++) {
// 		this.push(tempArray[i]);
// 	}

// 	return res;
// };

// const str = 'abc'; // 'aabbcc';
// const res = str.split('').reduce(function(acc, cur, i, self) {
//   acc[cur] = cur;
//   return acc;
// }, {}) // ['a', 'b', 'c'];
// {
//   a: a,
//   b: b
// }
// console.log(res);

// const nums = [175, 50, 25];
// function myFunc(acc, cur, i) {
//   console.log('index: ', i);
//   return acc - cur;
// }
// console.log(nums.reduce(myFunc, 0));

// const obj = {
//   age: 200,
//   name: 'Dio',
//   arr: ['key', 'val']
// }
// // Object.keys(obj).map(ele => {

// // })
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// Object.entries(obj).forEach(([key, val]) => {
//   console.log('key: ', key);
//   console.log('val: ', val);
// });

// * MyForeach, MyMap, MyFilter, MyReduce
// *
// * destructure
// const [a, _, b] = [1, 2, 3, 4];
// const {name: myName, age, arr: [k, v]} = obj;

// import {Componen: hello, Module: view} from '@angular/core';
// *
// * rest parameter vs. spread operator
// (function(a, b, ...n) {
//   console.log(a, b, ...n);
// })(2, 3, 4, 5, 8, 2, 62);

// const set = new Set([1, 2, 3])
// const arr = [...set];
// console.log(arr);

// const [a, b, ...args] = [2, 3, 4, 5, 8, 2, 62];
// console.log('args: ', args);

// * object copy: shallow, spread operator, JSON.stringify, structuredClone, lib(lodash.cloneDeep)
// // var foo = function () { return "hi" };
// const obj = {
// 	name: "Dio",
//   arr: [1, 2, 3],
//   date: new Date(),
//   foo: function() {
//     console.log('hello from obj.foo');
//   }
// };

// var _ = require('lodash');
// const obj4 = _.cloneDeep(obj);
// console.log(obj, obj4);
// obj4.foo();
// typeof, Array.isArray
// const obj1 = {...obj};
// console.log(JSON.stringify(obj));
// const obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj, obj2);

// const obj3 = structuredClone(obj);
// console.log(obj.arr[0], obj3.arr[0]);
// obj.arr[0] = 23;
// console.log(obj.arr[0], obj3.arr[0]);
// console.log(obj3);

// // * iife

// ^ interview question~~~~~~~~~~~~~~~
// const names = [
// 	{ userid: 2, name: "Velen" },
// 	{ userid: 56, name: "Illidan" },
// 	{ userid: 23, name: "Muradin" },
// 	{ userid: 12, name: "Sylvanas" },
// 	{ userid: 44, name: "Cenarius" },
// 	{ userid: 4, name: "Gul'Dan" },
// ];
// const roles = [
// 	{ userid: 2, role: "Mage" },
// 	{ userid: 4, role: "Worlock" },
// 	{ userid: 56, role: "Demon Hunter" },
// 	{ userid: 66, role: "Druid" },
// 	{ userid: 87, role: "Shaman" },
// 	{ userid: 12, role: "Hunter" },
// ];
// [
//   {
//     userid: 2, name:  "Velen", role: "Mage"
//   },
//   {
//     userid: 44, name:  "Cenarius", role: null
//   },
//   ...
//(function(require, export, module....) {})

// * closure

// function foo(a) {
// 	return function (b) {
// 		return function(c) {
//a++;
//       return a + b + c;
//     }
// 	}
// }
// const bar = foo(7);
// bar(1); // [a = 7]
// bar(7); // [a = 7]
// bar(2); // [a = 7]
// bar(1); // [a = 7]
// bar(98); // [a = 7]
// bar(3); // [a = 7]
// bar(6); // [a = 7]
// console.log(foo(7)(4)(5));

// const callback = function (a, b) {
// 	return a + b;
// };
// const foo = limitedFn(5, callback);
// const bar = limitedFn(2, callback);

// bar(4, 5); // 9 // [count = 0]
// bar(4, 8); // 12 // [count = 1]
// bar(4, 5); // 9 // [count = 2]
// bar(4, 5); // 9 // [count = 4]
// bar(4, 5); // 9 // [count = 5]
// bar(4, 5); // over limited // [count = 5]
// bar(4, 5); // over limited // [count = 5]
// bar(4, 5); // over limited // [count = 5]

// foo(4, 5); // 9 // [count = 0]
// foo(4, 8); // 12 // [count = 1]
// foo(4, 5); // 9 // [count = 3]
// foo(4, 5); // 9 // [count = 4]
// foo(4, 5); // 9 // [count = 5]
// foo(4, 5); // over limited // [count = 5]
// foo(4, 5); // over limited // [count = 5]
// foo(4, 5); // over limited // [count = 5]

// function limitedFn(n, cb) {
// 	let count = 0;

// 	return function (...args) {
// 		if (count < n) {
// 			console.log(cb(...args));
// 			count++;
// 		} else {
// 			console.log("over limited");
// 		}
// 	};
// }

// * currying
// //^ ~~~~~~interview question~~~~~~~~~~~~
// const callback1 = (a) => a + 2; // 6
// const callback2 = (b) => b * 2; // 12
// const callback3 = (c) => c - 2; // 10

// console.log(runAll(4)(callback1, callback2, callback3)); // 10
// function runAll(initNum) {
//   return function(...args) {

//   }
// }

// * this ---> object; only use it in a function
// hellofromindex = "David";
// // console.log('exports: ', this);
// // console.log(module.exports);
// // hi = 'hihi';
// (function() {
//   console.log('', this.hellofromindex);
//   console.log(this);
//   console.log(module.exports);
// })();
// (() => {
//   console.log('', this.hellofromindex);
// })();

// module.exports = {
//   name: 'hello',
// }

// const obj = {
// 	abcd: "Dio",
// 	foo() {
// 		this.hello = "hello";
// 		console.log("foo: ", this); // <------- this

//     (() => {
//       console.log("arrow: ", this); // <------- this, same
//     })();

//     function bar() {
// 			console.log("function: ", this); // <------- this
// 		}
//     const baz = bar.bind(this);
//     baz();
// 	},
// };
// obj.foo();

// // * call, apply, bind
// function callName(m, n) {
// 	// 100
// 	console.log(this.abcd, m, n);
// }

// const wrapCallName = callName.bind(obj); // 1
// // wrapCallName('hello', 'hi'); // Dio hello hi;
// // module.exports = wrapCallName;

// callName.call(obj, "hello", "hi"); // 1, + 100
// callName.apply(obj, ["hello", "hi"]); // 1, + 1[100]

// * arrow function

// * event loop
// * XHR
// * callback function; callback hell
// * Promise
// * MyPromise
// * MyFetch