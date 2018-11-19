// const myFunction = (a,b) => {
//   // console.log(a,b)
//     return `my name is ${a}${b}`
//   };
  
 
//   var c=1,b=2;
//   const taggedResult = myFunction`${"indhu"}fg${" mathi"}`;
//   console.log(taggedResult); //Outputs -> Function expression in template: Returned from myFunction!
function doSomething(string,...ar) {
  return string.reduce(function(arr,index,array){
    return `${arr}${index}${ar[array]||" "} `
  })
}
const name = "Kelvin";
const food = "Rice";
const sentence = doSomething`My name is  and I love eating ${food}`;

//console.log(sentence)
fun=(name,age)=>{
  return{
    get(){
      return name
    },
  giy(){
    return age
    }
  }
}
console.log(fun("indhu",22).giy())

var a=[1,2,3,4]
var ite=a[Symbol.iterator]()
b=ite.next();
while(!b.done){
  console.log(b.value);
  b=ite.next()
}
async function * fun(){
  yield 1
  yield 2
}
var i=fun()[Symbol.asyncIterator]()
b1=i.next();
while(!b1.done){
  console.log(b1.value)
  b1=i.next()
}


