/**
 * Created by db on 16/7/6.
 */

//
//var add = new Function(
//    'x',
//    'y',
//    'return (x+y)'
//
//);
//console.log (add(1,2));
//
//
//function add(x,y){
//    return(x + y);
//}
//console.log(add(5,6))
//
//
//var foo1 = new Function(
//    'return "hello world"'
//);
//console.log(foo1())
//
//
//
//
//function foo2() {
//    return 'hello world';
//}
//console.log(foo2())
//
//
//function f() {
//    console.log(1);
//}
//console.log (f())
//
//
//
//function f(){
//    console.log(2);
//}
//console.log(f())
//
//
//
//function add(x,y){
//    return x + y ;
//}
//console.log(add(4,5))
//
//
//
//function fib (num){
//    if (num > 2){
//        return fib(num - 2) + fib(num - 1);
//    }else{
//        return 1;
//    }
//}
//console.log(fib(4))
//
//
//function add(x,y){
//    return x + y;
//}
//var operator = add;
//function a(operator){
//    return operator*2;
//}
//console.log(a(add(2,1)))
//
//
//
//var f = function(){
//    console.log('1');
//}
//function f(){
//    console.log('2');
//}
//console.log(f())
//
//if (false){
//    function f(){}
//}
//console.log(f())
//
//
//function f2(){
//    //这是一个注释
//}
//console.log(f2.toString())
//
//var v = 1;
//function f3(){
//    var v = 2;
//    console.log(v);
//}
//console.log(f3())
//console.log(v)
//
//var x = 6;
//function xx(){
//    if (x === 5){
//        return true;
//
//}   else{
//        return false;
//}
//}
//console.log(xx())
//
//
//function f3(a,b){
//    return a;
//}
//console.log (f3(1,2,3));
//
//
//console.log(f3.length)
//
//
//function f4(a){
//    a = a ||  '';
//    return a;
//}
//console.log(f4())
//
//var p1 = 4;
//function f5(p1){
//    p1 = 3;
//}
//console.log(p1)
//
//var obj = {p:1};
//function f6(o){
//    o.p = 3;
//}
//f6(obj);
//console.log((obj.p))

//var obj = [1,2,3];
//function f7(oj){
//    o = [2,3,4];
//}
//f7(obj);
//console.log(obj)
//
//
//function f8(a,a){
//    console.log(a);
//}
//console.log(f8(1,3))
//
//function f(a,a){
//    console.log(arguments[1]);
//}
//console.log(f(1));

//var f = function(a, b){
//    arguments[0] = 3;
//    arguments[1] = 2;
//    return a + b;
//}
//console.log(f(1,1))

//function f(){
//    return arguments.length;
//}
//console.log(f(1,2,3))
//console.log(f(1,2,3,4))
//console.log(f(1,2))
//
//var n = 999;
//function f1(){
//    console.log(n);
//}
//console.log (f1())
//
//function a1(){
//    var n = 999;
//    function f2(){
//        console.log(n);
//    }
//    return f2;
//}
//var a2 = a1();
//console.log(a2());


//function Person(name){
//    var _age;
//    function setAge(n){
//        _age = n;
//    }
//    function getAge(){
//        return _age;
//    }
//    return {
//        name:name,
//        getAge:getAge,
//        setAge:setAge
//    };
//}
//
//var p1 = person('张三');
//p1.setAge(25);
//console.log(p1.getAge())

//function isOdd(n){
//    return Math.abs(n % 2) ===1;
//}
//console.log(isOdd(4))

//function logargs(){
//    for (var i = 0; i< arguments.length;i++){
//        console.log(i+':'+arguments[i]);
//    }
//}
//console.log(logargs(1,2,4))

//var a = [1,2,3];
//for (var i in a){
//    console.log(a[i]);
//}

//var a = [1,2,3]
//a.foo = true
//for (var key in a){
//    console.log(key)
//}
//
//var a = [,undefined,undefined];
//a.forEach(function(x,i){
//    console.log(i + '.'+ x)
//
//})

//var o = {a:1,b:2,c:3}
//var f10 =function(){
//  if('c' in o){return 11}
//}
//console.log(f10())
//
//for(var i in o){
//    console.log(o[i])
//}
//var obj = {
//    x:1,
//    y:2
//};
//var props = [];
//var i = 0;
//for (props[i++] in obj);
//console.log(props)

//Object.print = function(o){ console.log(o) };
//
//var o = new Object();
//
//Object.print(o)


//function isObject(value){
//    return value === Object(value);
//}
//console.log(isObject([]))
//console.log(isObject(true))

//var type = function (o){
//    var s = Object.prototype.toString.call(o);
//    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
//};
//
//console.log(type({}));
//var type = function (o){
//    var s = Object.prototype.toString.call(o);
//    return s.match(/\[object(.*?)\]/)[1].toLowerCase()
//
//}
//console.log(type({}))
//console.log(type([]))


//for(var i = 0; ){
//
//}

//
//
//var a = [1,2,3]
//for (var i in a ){
//    console.log(a[i])
//}
//for (var key in a){
//    console.log(key)
//}
//
//
//
//var a = [2, 1, 3, 4, 8, 30, 0]
//leng = a.length
//for (i = 0; i < leng - 1; i++){
//    for (k = 0; k < leng-i-1; k++){
//        if (a[k]>a[k+1]){
//            b = a[k]
//            a[k] = a[k+1]
//            a[k+1] = b
//        }
//    }
//
//}
//
//console.log(a)
//
//
//
//for (i = 0; i < a.length; i++){
//    for (k = i+1; k < a.length; k++){
//        if(a[i] > a[k]){
//            b = a[i]
//            a[i] = a[k]
//            a[k] = b
//        }
//    }
//}
//console.log(a)
//
//var m = 3;
//if(m === 3){
//    console.log('f')
//}
//else{
//    console.log(222)
//}
//var fruit = 'banand'
//switch (fruit) {
//    case "banana":
//        // ...
//        break;
//    case "apple":
//        // ...
//        break;
//    default:
//    // ...
//}
//
//var sum = 0
//for (i = 1;i<=4;i++){
//    sum = sum + i
//
//}
//console.log(sum)


//测试
//var c = "123478"
//var a = function(c){
//    if(typeof(c) === "String"){
//       var h = c.split("")
//
//
//    }
//    for (i=0 ; i< c.length-1; i++){
//        for (k = 0;k< c.length-i-1; k++){
//            if(c[k] > c[k+1]){
//                d = c[k]
//                c[k] = c[k+1]
//                c[k+1] = d
//
//            }
//        }
//
//    }
//   console.log(c)
//}
//
////var m = c.split("")
//a(c)


var sum = 0
for (var i = 1; i <= 100; i++) {
    sum = sum + i
}
console.log(sum)

//var sort = function (arr) {
//    var leng = arr.length
//    for (i = 0; i < leng; i++) {
//        for (k = i + 1; k < leng; k++) {
//            if (arr[i] > arr[k]) {
//                b = arr[i]
//                arr[i] = arr[k]
//                arr[k] = b
//
//            }
//        }
//    }
//    console.log(arr)
//}

//var arr = [1, 3, 2, 4, 0, 7, 6, 9, 3, 10, 11, 50, 20]
//sort(arr)


var sort = function(arr){
    var leng = arr.length
    for(i = 0;i<leng;i++){
        for(k=i+1;k<leng;k++){
            if(arr[i]>arr[k]){
                b=arr[i]
                arr[i]=arr[k]
                arr[k]=b
            }
        }
    }
    console.log('arr'+ arr)
}
var arr = [1, 3, 2, 4, 0, 7, 6, 9, 3, 10, 11, 50, 20]
sort(arr)

for (i = 0; i < arr.length; i++) {
    for (k = i + 1; k < arr.length; k++) {
        if (arr[i] > arr[k]) {
            b = arr[i]
            arr[i] = arr[k]
            arr[k] = b

        }
    }
}
console.log(arr)
var arr = [2, 1, 3, 0, 8, 9, 10, 4]


var sort = function (arr) {
    for (i = 0; i < arr.length - 1; i++) {
        for (k = 0; k < arr.length - i - 1; k++) {
            if (arr[k] > arr[k + 1]) {
                b = arr[k]
                arr[k] = arr[k + 1]
                arr[k + 1] = b
            }
        }
    }
    console.log(arr)
}
var arr = [2, 5, 3, 1, 0, 1, 9, 8]
sort(arr)

for (var i = 1; i < 10; i++) {
    for (var k = 1; k < 10; k++) {
        console.log(i + "x" + k + "=" + i * k)
    }
}

var bouns = function (money) {
    var bouns1 = 100000 * 0.1
    var bouns2 = bouns1 + 100000 * 0.075
    var bouns4 = bouns2 + 200000 * 0.05
    var bouns6 = bouns4 + 200000 * 0.03
    var bouns10 = bouns6 + 400000 * 0.015
    if (money <= 100000) {
        sum = money * 0.1
        console.log(sum)
    }
    else if (money <= 200000) {
        sum = bouns1 + (money - 100000) * 0.075
        console.log(sum)
    }
    else if (money <= 400000) {
        sum = bouns2 + (money - 200000) * 0.05
        console.log(sum)
    }
}
bouns(150000)

var counth = 0
for (var i = 1; i < 5; i++) {
    for (var k = 1; k < 5; k++) {
        for (var j = 1; j < 5; j++) {
            if (i != k && i != j && j != k) {
                add = i * 100 + k * 10 + j
                console.log(add)
                counth++
            }
        }
    }
}
console.log('共' + counth + '次')


var sort = function (arr) {
    for (i = 0; i < arr.length - 1; i++) {
        for (k = 0; k < arr.length - i - 1; k++) {
            if (arr[k] > arr[k + 1]) {
                b = arr[k]
                arr[k] = arr[k + 1]
                arr[k + 1] = b
            }
        }
    }
    console.log(arr)

}

var arr = [2, 1, 3, 4, 5, 7, 0, 9, 8]
sort(arr)


var shl = function (month) {
    var shl2 = function (month) {
        if (month === 1 || month === 2) {
            return 1
        } else {
            return shl2(month - 1) + shl2(month - 2)
        }

    }
    console.log("第" + month + "共有兔子" + shl2(month) + "只")
}

shl(12)


var tz = function (month) {
    var add = []
    for (var i = 0; i < month; i++) {
        if (i === 0 || i === 1) {
            add[1] = add[0] = 1
            console.log("第" + (i + 1) + "共有兔子" + 1 + "只")

        } else {
            add[i] = add[i - 1] + add[i - 2]
            console.log("第" + (i + 1) + "共有兔子" + add[i] + "只")
        }

    }
}


tz(24)
var counth=0
for(var i =1;i<5;i++){
    for(var k = 1;k<5;k++){
        for(var j = 1;j<5;j++){
            if (i!=k && i!=j && k!=j){
                var a = (i*100+k*10+j)
                console.log(a)
                o = counth++


            }

        }
    }
}

console.log("共:"+o+"次")



var sum = 0
for(i = 0;i<=100;i++){
    sum = sum +i
}
console.log(sum)




var c = function(arr){
    var leng = arr.length
    for(i = 0;i<leng;i++){
        for(k=i+1;k<leng;k++){
            if(arr[i] >arr[k] ){
                b = arr[i]
                arr[i]=arr[k]
                arr[k]=b
            }

        }

    }
    console.log(arr)
}

arr=[1,4,0,3,5,0];
c(arr)





