/**
 * Created by db on 16/7/12.
 */

//var arr = [100, 200, 300, 400, "yishuangxi"]
//
////for(var i = 0; index < arr.length; index++){
////
////    console.log( index , arr[index])
////
////}
//
//var arr2 = arr;
//
//arr2[0] = 10000

//排序
//
//var arr = [2, 1, 3, 0, 8, 9, 10,4]
//for (i = 0;i<arr.length;i++){
//    for (k = i+1;k<arr.length;k++){
//        if (arr[i]>arr[k]){
//            b = arr[i]
//            arr[i] = arr[k]
//            arr[k] = b
//        }
//    }
//}
//console.log(arr)
//
//var arr = [5, 1, 2, 0, 3, 6, 4]
//for (i = 0; i < arr.length-1;i++){
//    for (k = 0; k < arr.length-i-1;k++){
//        if (arr[k] > arr[k+1]){
//            b = arr[k]
//            arr[k] = arr[k+1]
//            arr[k+1] = b
//        }
//    }
//}
//console.log(arr)
//
//从1加到100
//var sum = 0;
//for (i = 1;i <= 100;i++){
//
//    sum = sum + i
//}
//console.log(sum)
//

//题目：有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？
//var g = 0
//for (var i = 1;i< 5;i++){
//   for (var j = 1;j < 5;j++){
//       for(var k = 1;k < 5;k++){
//           if(i != j && i != k && j != k){
//               var add = i*100 + j*10 + k;
//               console.log(add);
//                s = g++
//           }
//       }
//   }
//}
//console.log("共" + s + "个")

//发奖金
var bonus = function (money) {
    var bonus1 = 100000 * 0.1
    var bonus2 = bonus1 + 100000 * 0.075
    var bonus4 = bonus2 + 200000 * 0.05
    var bonus6 = bonus4 + 200000 * 0.03
    var bonus10 = bonus6 + 400000 * 0.015
    var sum = 0

    if (money <= 100000) {
        sum = money * 0.1
        console.log(sum)
    }
    else if (money <= 200000) {
        sum = bonus1 + (money - 100000) * 0.075
        console.log(sum)

    }
    else if (money <= 400000) {
        sum = bonus2 + (money - 200000) * 0.05
        console.log(sum)
    }
    else if (money <= 600000) {
        sum = bonus4 + (money - 200000) * 0.03
        console.log(sum)
    }
    else if (money <= 1000000) {
        sum = bonus6 + (money - 400000) * 0.015
        console.log(sum)
    }
    else {
        sum = bonus10 + (money - 1000000) * 0.01
        console.log(sum)
    }
}

bonus(150000)

//题目：输出9*9口诀。

//for (i = 1;i<10;i++){
//200000-
//
//    for (k = 1; k<10;k++){
//
//        console.log(i + " x "+ k + " = "+ i*k)
//    }
//}

//var rabbit = function(month){
//    var a = []
//    for (var i = 0;i<month;i++){
//        if(i===0 || i===1){
//            a[1] = a[0] = 1
//            console.log("第"+ [i+1] + "个月共有兔子"+1+"只")
//        }else{
//            a[i]= a[i-1] + a[i-2]
//            console.log("第"+ [i+1] + "个月共有兔子"+a[i]+"只")
//
//        }
//    }
//}
//
//rabbit(12)

//var rabbit = function (month) {
//    var sum = function (month) {
//        if (month === 1 || month === 2) {
//            return 1
//        } else {
//            return sum(month - 1) + sum(month - 2)
//
//        }
//    }
//    console.log("第" + month + "个月共有兔子" + sum(month) + "只")
//}
//rabbit(24)

//var sum = function(mark ){
//    if (mark>=90){
//        console.log("A")
//    }else if(mark>=60 && mark<90){
//        console.log("B")
//
//    }else if(mark<60){
//        console.log("C")
//    }
//}
//sum(91)

