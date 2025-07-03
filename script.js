/*console.log("hello world");
var a=200;
console.log(a);
function abc(){
    console.log("hello class");
}
var b=300;
console.log(b);
setTimeout(()=>{
    console.log("I am settimeout");
},2000);
abc();
console.log("end of program");
*/
/*console.log("hello");
var a=200;
console.log(a);
//console.log(xyz);
//xyz();
var xyz=()=>{
    console.log("this is xyz function");
}
xyz();
console.log("End");
*/
function grandParent(){
    var a=200;
    console.log(a);
    //sconsole.log(c);
    function parent(){
    var b=300;
    console.log(b);
    function child(){
        var c=400;
        console.log(c);
    }
    }

}
grandParent();

