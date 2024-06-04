/* 
Custom Array Functions for Assignment 3 including:
filter, map, includes, indexOf, reduce, slice, splice */

const arr = [1, 2, 3, 4, 5];

// filter function
Array.prototype.myFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) arr.push(this[i]);
  }
  return newArray;
};

// run filter function
const filtered = arr.myFilter((item) => item > 3);
console.log("Custom filter function:");
console.log(filtered);

const filtered_builtin = arr.filter((item) => item > 3);
console.log("Built-in filter function:");
console.log(filtered_builtin);

// map function
Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i));
  }
  return arr;
};

// run map function
const mapped = arr.myMap((item) => item * 2);
console.log("Custom map function:");
console.log(mapped);

const mapped_builtin = arr.map((item) => item * 2);
console.log("Built-in map function:");
console.log(mapped_builtin);

// includes function
Array.prototype.myIncludes = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) return true;
  }
  return false;
};

// run includes function
const included = arr.myIncludes(3);
console.log("Custom includes function:");
console.log(included);

const included_builtin = arr.includes(3);
console.log("Built-in includes function:");
console.log(included_builtin);

// indexOf function
Array.prototype.myIndexOf = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) return i;
  }
  return -1;
};

// run indexOf function
const index = arr.myIndexOf(3);
console.log("Custom indexOf function:");
console.log(index);

const index_builtin = arr.indexOf(3);
console.log("Built-in indexOf function:");
console.log(index_builtin);

// reduce function
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};

// run reduce function
const reduced = arr.myReduce((accumulator, item) => accumulator + item, 0);
console.log("Custom reduce function:");
console.log(reduced);

const reduced_builtin = arr.reduce(
  (accumulator, item) => accumulator + item,
  0
);
console.log("Built-in reduce function:");
console.log(reduced_builtin);

// slice function
Array.prototype.mySlice = function (start, end) {
  let arr = [];
  for (let i = start; i < end; i++) {
    arr.push(this[i]);
  }
  return arr;
};

// run slice function
const sliced = arr.mySlice(1, 3);
console.log("Custom slice function:");
console.log(sliced);

const sliced_builtin = arr.slice(1, 3);
console.log("Built-in slice function:");
console.log(sliced_builtin);

// splice function
Array.prototype.mySplice = function (start, deleteCount, ...items) {
  let arr = [];
  for (let i = 0; i < start; i++) {
    arr.push(this[i]);
  }
  for (let i = 0; i < items.length; i++) {
    arr.push(items[i]);
  }
  for (let i = start + deleteCount; i < this.length; i++) {
    arr.push(this[i]);
  }
  return arr;
};

// run splice function
const spliced = arr.mySplice(1, 2, 6, 7);
console.log("Custom splice function:");
console.log(spliced);

const spliced_builtin = arr.splice(1, 2, 6, 7);
console.log("Built-in splice function:");
console.log(spliced_builtin);
console.log("Updated array after Splice:");
console.log(arr);
