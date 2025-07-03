/*function calculate(param1){
console.log("Calculate the bl");
param1();
}
var sumofTwo=()=>{
    console.log("sum of two");
}
calculate(sumofTwo);
//higher order function
function calculate(logicFunction,a,b){
    return  logicFunction(a,b);
}
//logic function
function add(a,b){
    return a+b;
}
function sub(a,b){
return a-b;
}
console.log(calculate(add,2,5));
console.log(calculate(sub,5,3));
function printStudentName(logicFunction,name,fees){
    return StudentData(name,fees);
}
function StudentData(name,fees){
    return {name,fees};
}
var fee=0;
function emi(fees){
    fee=fees/10;
    return fee;
}
function welcome(name,fees,emi){
    return `Student name is ${name} with fees ${fees} & emi of ${emi}`;
}
console.log(StudentData("simi",30000));
console.log(emi(fee));
console.log(welcome("simi",30000,fee));
*/
setTimeout(()=>{
    console.log("Hello setTimeout")},3000
)
setInterval(() => {
    console.log("set interval");
}, 2000);