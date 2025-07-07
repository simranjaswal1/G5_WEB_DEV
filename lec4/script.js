//let arr=[2,4,6,5,8];
//const newArr=arr.map((x)=>x*2);
//console.log(newArr);
/*function doubleData(x){
    return x*x;
}
Array.prototype.mapReplica=function(logic){
    let outputArr=[];
    for(let i=0;i<this.length;i++){
        outputArr.push(logic(this[i]));
    }
    return outputArr;
}
const arr2=arr.mapReplica(doubleData);
console.log(arr2);
*/

//filter
//const words=["spray","elite","exuberant","destruction","present"];
//const result=words.filter((word)=>word.length >6);
//console.log(result);
/*function data(x){
    if(x.length>6){
        return 1;
    }else{
        return 0;
    }
    
}
Array.prototype.filterReplica=function(logic){
    let outputArr=[];
    for(let i=0;i<this.length;i++){
        if(logic(this[i])==1){
        outputArr.push(this[i]);
        }
    }
    return outputArr;
}
const arr3=words.filterReplica(data);
console.log(arr3);
*/
/*const array1=[1,2,3,4];
const initialValue=3;

//console.log(sumWithInitial);
Array.prototype.reduceReplica=function(logic){
  let sum=0;
      for(let i=0;i<this.length;i++){
        if(i==0){
  sum+=data(initialValue,this[i]);
        }else{
            sum+=data(0,this[i]);
        }
      }
      return sum;
    
}
function data(initialValue,x){

    x=initialValue+x;
   return x;
}
const sumWithInitial=array1.reduceReplica(
    (accumulator,currentValue)=>accumulator+currentValue,initialValue,
);
console.log(sumWithInitial);
*/
const array1=[1,2,3,4];
function mylogic(acc,curr){
    return acc+curr;
}
Array.prototype.reduceReplica=function(logic,initialValue){
    let result=initialValue;
    for(let i=0;i<this.length;i++){
        result=logic(result,this[i]);
    }
    return result;
}
const finalans=array1.reduceReplica((acc,curr)=>acc+curr,10);

console.log(finalans);