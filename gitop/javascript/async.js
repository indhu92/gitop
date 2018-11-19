function fun(a,b){
    return new Promise(function(resolve,reject){
        resolve(a+b)
    })
}
fun(1,2).then(function(result){
    console.log(result)
})