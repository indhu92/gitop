function fun(name,age){
    this.name=name;
    this.age=age;
    console.log(this.name);
    function b(){
        console.log(this.name)
    }
    fun.b=b;
}
var obj=new fun("indhu",22);
var bound=fun.b.bind(obj);
bound()
