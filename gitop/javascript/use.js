// "use strict"
// function fun(){
// console.log(this)
// }
// fun()
var a=[1,2,3,3]
b=a.map(function(arr){
    return arr
}).reduce(function(total,arr){
    console.log(total,arr)
    return total+arr
})
console.log(b)
