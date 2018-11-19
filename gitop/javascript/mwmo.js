// var fun=function(n){
//     let v=1;
//     var memo={};
//     return function(){
//         if(n in memo){
//             console.log(memo[n])
//         }
//         else {
//             var value=v*v
//             memo[v]=value;
//         }
//         return memo[n]
//     }
    
// }
// fun(3);
// // fun(1);

// var fibonacci = (function() {
//     var memo = {};
  
//     function f(n) {
//       var value;
  
//       if (n in memo) {
//         value = memo[n];
//       } else {
//         if (n === 0 || n === 1)
//           value = n;
//         else
//           value = f(n - 1) + f(n - 2);

//         memo[n] = value;
//       }
  
//       return value;
//     }
  
//     return f;
//   })();
//   console.log(fibonacci(5))

var factorial=memoize(function(val){
  if(val==1){
    return 1;
  }
  else if(val==0)
  {
    return 0;
  }
  else{
    return (val+factorial(val-1))
  }
});
function memoize(value){
  var memo={}
  return function(){
    var key=JSON.stringify(arguments)
    if(memo[key]){
      return memo[key]
    }
    else{
      var v=value.apply(null,arguments)
      memo[key]=v;
      return memo[key]
    }

  }
}
console.log(factorial(2))
console.log(factorial(6))