// var obj={name:"indhu"}
// var greeting=function(){
//      console.log(this.name)
// }
// var bound=greeting.bind(obj);
// bound()

Name=function(fname,lname){
    this.lname=lname;
    this.fname=fname;
    console.log(this.fname,this.lname);
    function fullName(){
        console.log(this.fname,this.lname)
    }
    Name.fullName=fullName;
}
var obj=new Name("indhu","mathi");
Name.fullName()
var bound=Name.fullName.bind(obj);
bound()