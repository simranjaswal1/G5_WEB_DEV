console.log("START SCRIPT");
/*function  walkInRes(){
    setTimeout(()=>{
    console.log("I am going to restaurant");
},3000);
}
function checkMenu(){
setTimeout(()=>{
    console.log("I am checking the menu");
},2000);
}
function orderFood(){
setTimeout(()=>{
    console.log("I am checking the menu");
},5000);
}
*/
function walkInRes(cb){
    console.log("I am walking inside the restaurant");
    setTimeout(cb,3000);
}
function checkMenu(cb){
    console.log("I am checking the menu");
    setTimeout(cb,5000);
}
function orderFood(cb){
    console.log("I am ordering the food");
    setTimeout(cb,5000);
}
function havingLunch(cb){
    console.log("I am having my lunch ");
    setTimeout(cb,6000);
}
function payBill(cb){
    console.log("I am paying the bill");
    setTimeout(cb,3000);
}
function checkOut(){
    console.log("I am checking out");
}


walkInRes(()=>{
    checkMenu(()=>{
        orderFood(()=>{
            havingLunch(()=>{
                payBill(()=>{
                    checkOut();
                })
            })
        })
    })
})
