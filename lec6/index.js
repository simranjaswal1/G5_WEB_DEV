/*async function fetchDataProducts(){
    const data= await fetch('https://dummyjson.com/products')
    const finalData= await data.json();
    console.log(finalData);
}
fetchDataProducts();*/
/*const promiseByPransh=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I will complete the assignment by 1 pm");
    },3000);
});
async function checkAssignment(){
    const assignmentdata= await promiseByPransh;
    console.log(assignmentdata);
}
checkAssignment();
*/
/*
const grandParent=document.getElementById('grandparent');
const parent=document.getElementById('parent');
const child=document.getElementById('child');
grandParent.addEventListener('click',()=>{
    console.log("This is grandParent div")
},true);
parent.addEventListener('click',()=>{
    console.log("This is parent div")
},true);
child.addEventListener('click',()=>{
    console.log("This is child div");
},true);
*/
function admissionProcess(cluster,campus){
    console.log(`Hi ${this.studentName}, from class :${this.studentClass}`);
    console.log(`cluster ${cluster}, from ${campus}`);
}
const student1={
    studentName:"Simran",
    studentClass:"4th year"
}
const student2={
    studentName:"Simranjaswal",
    studentClass:"4th year"
}
const student3={
    studentName:"SimranJaswal",
    studentClass:"4th year"
}
admissionProcess.call(student1,"Zeta cluster","Punjab Campus");
admissionProcess.apply(student2,["Zeta cluster","Punjab Campus"]);
const b1=admissionProcess.bind(student3,"Zeta cluster","Punjab Campus");
b1();
