// var ok = ['a', 'b', 'c'];
// ok.push('d');
// console.log(ok);
// console.log(ok.pop());
// console.log(ok.pop());
// console.log(ok);

///////////////////////////////////////

// // m = "ok";
// function f() {
//     m = "ok";
// }
//
// console.log(m)

//////////////////////////////////////////

// var x = {ok:5};
// delete x.ok;
// console.log(x)

////////////////////////////////////////////////////

// var a, x, y;
// var r = 10;
//
// with (Math) {
//     a = PI * r * r;
//     x = r * cos(PI);
//     y = r * sin(PI / 2);
// }
//
// ////////////////////////////////////////////////////
//
// var okay = {
//     lol: 5,
//     bol: 6
// }
//
// with (okay) {
//     console.log(lol)
//     console.log(bol)
// }

////////////////////////////////////////////////////

// var x = 10;
// var y = 20;
// var a = eval("x * y") + "<br>";
// var b = eval("2 + 2") + "<br>";
// var c = eval("x + 17")

////////////////////////////////////////////////////

// var frmName = "lol";
// var text = "nok";
// var doc = {
//     frm: {
//         lol: ""
//     }
// };
//
// console.log(eval('doc.frm.'+frmName).value = text)
// console.log(doc)

////////////////////////////////////////////////////

// difference let - var

// function lol() {
//     try {
//         var ok = "lol";
//         let wok = "bol";
//     } catch (error) {

//     }

//     console.log(ok);
//     console.log(wok);

// }

// // lol();

////////////////////////////////////////////////////
// var gets hoisted


// let x = function() {
//     if(true) {
//         console.log(v);
//         console.log(l);
//
//         var v = 2;
//         var l = 1;
//     }
// }
// x();

////////////////////////////////////////

// function  ok() {
//     return `ok
//         lol ${(() => "bol")()}

//     wuuut`;
// }

////////////////////////////////////////
// ===     strict equality operator
// ==      loose equality operator,  type coercion occurs
// Type coercion means that two values are compared only after attempting to convert them into a common type.


// (() => {
//     console.log(77 == '77');
//     console.log(77 == 77);

//     console.log()

//     console.log(77 === '77')
//     console.log(77 === 77)

//     console.log()

//     console.log(false == 0)
//     console.log(true == 1)

//     console.log()

//     console.log(false === 0)
//     console.log(true === 1)

//     console.log()

//     console.log(true == 1)
//     console.log()

// })();

//////////////////////////////////////////

// let boll = new Function("ok", "wok", "console.log(ok); console.log(wok)");

// boll(3,5);

////////////////////////////////////////////


// function secretVariable(){
//     var private = "private ok";

//     return function(){
//         return private;
//     }
// }

// console.log(secretVariable()());

//////////////////////////////////////////

// var num = 4;
// function outer(){
//     var num = 2;
//     function inner(){
//         num++;
//         var num = 3;
//         console.log(num);
//     }
//     inner();
// }

// outer();

// let trol = 5;

// (function wowko() {
//     try {
//         console.log(trol);
//     } catch (error) {

//     }
// })();

///////////////////////////////////////////

// console.log("[] : " + typeof typeof 2); // always string
// console.log("NaN : " + typeof NaN);
// console.log("null : " + typeof null);
// console.log("undefined : " + typeof undefined);
// console.log("(() => {}) : " + typeof (() => {}));
// console.log("[] : " + typeof []);
// console.log("//////////////////////////////////////");
// console.log(" toString.call([]) : " + toString.call([]));
// console.log(" Array.isArray({}) : " + Array.isArray({}));
// console.log(" toString.call(null) : " + toString.call(null));
// console.log(" toString.call(NaN) : " + toString.call(NaN));
// console.log(" toString.call(undefined) : " + toString.call(undefined));
// console.log(" toString.call((() => {})) : " + toString.call((() => {})));
// console.log("//////////////////////////////////////");
// console.log(" {}.constructor : " + {}.constructor);
// console.log(" (() => {}).constructor : " + (() => {}).constructor);

//////////////////////////////////////////////////////////////

// // "use strict";
//
// (function(){
//     var a = b = 3;
// })();
//
// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));
// console.log();
// console.log(typeof a);
// console.log(typeof b);

///////////////////////////////////////////////////////////////

// "use strict";
// x = 3.14;
//
// //-----------------------------/
// "use strict";
//
// x  = 3.14;
// delete x;
//
// //-----------------------------/
//
// "use strict";
// x  = {p1:10, p1:20};
//
// //-----------------------------/
//
// "use strict";
// function x(p1, p1){}
//
// //-----------------------------/
//
// "use strict";
// var x = 010;
// var y = \010;
//
//-----------------------------/
//
// "use strict";
// var obj = {};
// obj.defineProperty(obj, "x", {value:0, writable: false});
// obj.x = 3.14;

//-----------------------------/
//
// "use strict";
// var obj = {get x() {return 0}};
// obj.x = 3.14;

//-----------------------------/

// "use strict";
// delete Object.prototype;

//-----------------------------/

// "use strict";
// var eval = 3.14;
// var arguments = 3.14;

//-----------------------------/

// "use strict";
// with (Math){x = cos()};

//-----------------------------/

// "use strict";
// console.log(eval ("var x = 2"));

/////////////////////////////////////////////////////////////
// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity : function() {
//         return this._name;
//     }
// };

// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());

//////////////////////////////////////////////////
// Use of arrow functions and how it affects this...

// const profile = {
//     firstName: '',
//     lastName: '',
//     age: '',
//     setName: function(name){
//         let splitName = (n) => { // with function() { ... } it wouldn't work
//             let nameArray = n.split(' ');
//             this.firstName =  nameArray[0];
//             this.lastName = nameArray[1];
//
//             let setAge = (age) => { // with function() { ... } it wouldn't work
//                 this.age = age;
//            }
//
//             setAge(20);
//         }
//         splitName(name);
//     }
// }
//
// profile.setName('john doe');
// console.log(profile.firstName);
// console.log(profile.age);
// console.log(this.firstName);
// console.log(this.age);(r


////////////////////////////////////////////////
// Prototypal inheritance
// Or
// Prototype base inheritance

//
// let car = function(model) {
//     this.model = model;
// }
//
// car.prototype.getModel = function(){
//     return this.model;
// }
//
// let toyota = new car('toyota');
// console.log(toyota.getModel());
//
// let nissan = new car('nissan');
// console.log(nissan.getModel());


////////////////////////////////////////////////
// Difference between function declaration and function expression

// console.log(func1());
// console.log(expr());
//
// function func1() {
//     console.log('function declaration');
// }
//
// let expr = function() {
//     consolelog('function expression')}

//////////////////////////////////////////////

// let p = new Promise(function (resolve, reject) {
//     if(Math.random() > 0.5){
//         resolve("resolved!");
//     }else{
//         reject("rejected!");
//     }
// })
//
// p.then(function (msg) {
//     console.log("then: " + msg)
// }).catch(function (err) {
//     console.log("catch: " + err)
// })

/////////////////////////////////////////
// always delay
// setTimeout(function () {
//     console.log(1);
// }, -5) // same as 0
//
// console.log(2);
// console.log(3);


/////////////////////////////////////////
// closures

//-----------------------------------------
// function html_tag(tag) {
//     function wrap_text(msg){
//         console.log('<' + tag + '>' + msg + '</' + tag + '>');
//     }
//
//     return wrap_text;
// }
//
// var print_h1 = html_tag('h1');
//
// print_h1('Test Headline!');
// print_h1('Another Headline!');
//
// var print_p = html_tag('p');
// print_p('Test Paragraph!');

//-----------------------------------------

// function logger(func) {
//     function log_func(...args){
//         console.log("Running " + func.name + " with arguments " + args);
//         console.log(func(...args))
//     }
//
//     return log_func;
// }
//
// var add = function(x,y) {
//     return x+y;
// }
//
// var sub = function(x,y) {
//     return x-y;
// }
//
// var add_logger = logger(add);
// var sub_logger = logger(sub);
//
// add_logger(5,8);
// sub_logger(10,7);

///////////////////////////////////////

// let addTo = function(passed){
//
//     let add = function(inner){
//         return passed + inner;
//     };
//
//     return add;
// };
//
// console.log(addTo(4)(5));
//
// let addTwo = new addTo(4);
// let addFour = addTwo(5);
//
// console.log(addFour)

/////////////////////////////////////////////

// const nice = require('./nice-module');
// console.log(nice());

////////////////////////////////////////////
//
// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

//////////////////////////////////////////

// function foo1()
// {
//     return {
//         bar: "hello"
//     };
// }
//
// function foo2() {
//     return
//     {
//         bar: "hello"
//     };
// }
//
// console.log("foo1 returns:");
// console.log(foo1());
// console.log("foo2 returns:");
// console.log(foo2());


////////////////////////////////////////

// console.log(NaN === NaN);
// console.log(undefined === undefined);

///////////////////////////////////////

// function areTheNumbersAlmostEqual(num1, num2) {
//     return Math.abs( num1 - num2 ) < Number.EPSILON;
// }
// console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));

////////////////////////////////////////

// function isInteger1(x) { return (x ^ 0) === x; }
// function isInteger2(x) { return Math.round(x) === x; }
// function isInteger3(x) { return Math.floor(x) === x; }
// function isInteger4(x) { return (typeof x === 'number') && (x % 1 === 0); }
// function isInteger5(x) { return parseInt(x, 10) === x; } // incorrect
//
// console.log(isInteger4(2))
// console.log(Math.ceil(2.5) === 3)

///////////////////////////////////////////////
// What order ?

// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();

//////////////////////////////////////////////
// gewoon snel kunnen maken, of iets gelijkaardigs

// function isPalindrome(s){
//     for(let i = 0; i < s.length/2; i++){
//         if(s[i] !== s[s.length-1-i] ){
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(isPalindrome("lepel"));

//---------------------------------------------
//
// function isPalindrome(str) {
//     str = str.replace(/\W/g, '').toLowerCase();
//     return (str == str.split('').reverse().join(''));
// }

//////////////////////////////////////////////
// sum function to call like this:
// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// function sum1(x) {
//     if (arguments.length == 2) {
//         return arguments[0] + arguments[1];
//     } else {
//         return function(y) { return x + y; };
//     }
// }

// console.log(sum(2,3));   // Outputs 5

//-----------------------------------------

// function sum(x, y) {
//     if (y !== undefined) {
//         return x + y;
//     } else {
//         return function(y) { return x + y; };
//     }
// }
//
// console.log(sum(2)(3));  // Outputs 5

///////////////////////////////////////////////
// niet wat we willen ...
// var ok = [];
// for (var i = 0; i < 5; i++) {
//     ok.push({value: function () {
//             console.log(i);
//         }});
// }
//
// ok.forEach(function (x) {
//     x.value()
// })

//-----------------------------------

// Kan zo opgelost worden:

// // met let ipv var
// var ok = [];
// for (let i = 0; i < 5; i++) {
//     ok.push({value: function () {
//             console.log(i);
//         }});
// }
//
// ok.forEach(function (x) {
//     x.value()
// })

//-----------------------------------

// door de push in een self invoking function te steken ...
// var ok = [];
// for (var i = 0; i < 5; i++) {
//     (function(i) {
//         ok.push({value: function () {
//                 console.log(i);
//             }});
//     })(i);
// }
//
// ok.forEach(function (x) {
//     x.value()
// });

//-----------------------------------

// of zo
// var ok = [];
// ['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
//     ok.push({value: function () {
//                 console.log(i);
//             }});
// });
//
// ok.forEach(function (x) {
//     x.value()
// });

/////////////////////////////////////////////

// var d = {};
// [ 'zebra', 'horse' ].forEach(function(k) {
//     d[k] = undefined;
// });
//
// console.log(d);

///////////////////////////////////
// reverse geeft een reference terug, alles wordt op die reference uitgevoerd ...

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
//

//--------------------------------------
// zelfde


// var arr = "jan".split('');
// var arr2 = arr.reverse();
// var arr3 = "boy".split('');
// arr2.push(arr3)
// console.log(arr);
// console.log(arr2)
// console.log(arr3)

////////////////////////////////////////

// console.log(1 +  "2" + "2");
// console.log(1 +  +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);

//////////////////////////////////////////

