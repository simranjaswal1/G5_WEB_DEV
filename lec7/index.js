const listOfProducts=document.getElementById("listOfProducts")
listOfProducts.addEventListener("click",(event)=>{
    if(event.target.tagName==="LI"){
        console.log("CLicked on:",event.target.textContent);
    }
})
const newProduct=document.createElement("li")
newProduct.textContent="Mobile Phone"
listOfProducts.appendChild(newProduct);

const searchBox=document.getElementById("searchHandle");
function abc(searchBox){
let timeoutId;
searchBox.addEventListener("input",(event)=>{
    clearTimeout(timeoutId)
    timeoutId=setTimeout(()=>{
   console.log(event.target.value);
    
    },2000);
    
})
}
abc(searchBox);