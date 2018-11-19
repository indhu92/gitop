function fun(a,b){
    return new Promise (function(resolve,reject){
        resolve(a+b)
    })
}
function calculate(c){
  return new Promise(function(resolve,reject){
    resolve(c*5)
  })
}
function total(sum){
  console.log(sum)
}
fun(2,3).then(function(result){
   return calculate(result)
}).then(function(result){
    total(result)
})
// My function
const myfunction = async (x, y)=> {
    return x+y
  }
  const start = async ()=> {
    const result = await myfunction(2,3);
    
    console.log(result);
  }
  start() 