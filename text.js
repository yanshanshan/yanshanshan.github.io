/**
 * Created by db on 16/9/13.
 */
 a = [1, 2, 1, 3, 1, 0, 2,1,2,2,3,0,2,1,5,2]
var b = []

var temp;

for(var i = 0;i< a.length;i++) {
    for (var j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) {
            temp = a[j];
            a[j] = a[i];
            a[i] = temp;
        }
    }
}
console.log(a)

//for(var k = 0; k < a.length; k++) {
//    if(a[k] != a[k+1]) {
//        b.push(a[k])
//    }
//}
console.log(b)


var a = [323,4,5,1]
var b = [323,4,5,1]

function compare(obj) {
    for(var i = 0; i < a.length; i++) {
        if(obj instanceof Array) {}
    }
}