"use strict";
var a = 100;
var b = "hello";
var c = !!"hello";
var d = 200;
// let e:Array<number>=[1,2,3];
var e = [1, 2, 3];
var direction = ['top', 'left', 'down', 'right', 'center'];
var statusCode;
(function (statusCode) {
    statusCode[statusCode["top"] = 100] = "top";
    statusCode["left"] = "";
    statusCode["down"] = "";
    statusCode["right"] = "";
})(statusCode || (statusCode = {}));
console.log(statusCode['right'], statusCode[100]);
var f = { a: 100 };
console.log(f.a);
var g = {
    code: 100,
    data: {
        code: 100,
        msg: "success"
    },
    msg: "请求成功",
    a: "",
    b: "",
    c: ""
};
var add = function (a, b) { return a + b; };
add(1, 2);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap(['hello', 100]);
swap([[], {}]);
function pick(o, names) {
    return names.map(function (n) { return o[n]; });
}
pick({ a: 1, b: 2, c: 3, d: 4, e: 5 }, ['a', 'b', 'c', 'd', 'e']);
//联合类型 交叉类型
var h = 1000;
var i = {
    click: function () { },
    list: [],
    totalNum: 100,
    totalPrice: 1000
};
console.log('i的属性...');
var j = {};
console.log('j的click属性...', j.click);
