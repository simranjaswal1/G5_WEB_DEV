var a=200;
console.log(a);
function hello(){
    console.log("hello");
}
hello();
var b=300;
setImmediate(()=>{
    console.log("set immediate");
})
console.log(b);
console.log("end of script");
process.nextTick(()=>{
    console.log("this is next tick");
})