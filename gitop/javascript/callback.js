// function fun(a,b,callback){
//     callback(a+b,three)
// }
// function two(sum,callback){
//     callback(sum*8)
// }
// function three(t){
//     console.log(t)
// }
// fun(1,2,two)
function fun(a,b,callback){
    callback(a+b)
}
function two(sum,callback){
    callback(sum*8)
}
function three(t){
    console.log(t)
}
sum=0;
fun(1,2,function(sum){
    two(sum,function(t){
        three(t*1);
    })
})
function fun(a,b,callback){
    var c=a+b;
    callback(c)
}
function two(sum,callback){
    var mul=sum*1;
    callback(mul)
}
function three(result){
    console.log(result)
}
fun(2,3,function(sum){
    two(sum,function(mul){
        three(mul)
    })
})