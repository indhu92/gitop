var obj={name:"indhu"}
function fun(lname){
    console.log(this.name,lname)
}
args=["mathi"]
fun.apply(obj,null);