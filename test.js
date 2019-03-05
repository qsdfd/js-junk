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

// console.log(typeof typeof 2); // always string
// console.log(typeof NaN);
// console.log(typeof null);
// console.log(typeof undefined);

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
//             }
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
// console.log(this.age);


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

// var passed = 3;
//
// var addTo = function() {
//     var inner = 2;
//     return passed + inner
// }
//
// console.log(addTo());
//
// console.dir(addTo)

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