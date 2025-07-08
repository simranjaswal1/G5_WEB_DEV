/*const myPromise= new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve
    ("foo");
},3000);
});
myPromise
.then((res)=>console.log(res))
.catch((err)=>console.log(err));
//console.log(myPromise);
const myPro=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I will get  placed");
        reject("I will not get placed");
    },3000);
})
myPro.then((res)=>console.log(res))
.then((res)=>myPro2)
.catch((err)=>console.log(err))
const myPro2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I will go");
        reject("I will not get placed");
    },6000);
})
myPro2.then((res)=>console.log(res))

.catch((err)=>console.log(err))
*/


/*
const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello");
    },3000);
})
myPromise
.then((res)=>console.log(res))
.then(()=>setTimeout(()=>{
    console.log("SIMI PARTY");
},2000))
.then(()=>setTimeout(()=>{
  console.log("Simi will work");
},3000))
.then(()=>setTimeout(()=>{
   console.log("  happy");
},1000))
.catch((err)=>console.log(err));

function place(placement,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(" I will get placement "+placement);
            console.log("i will get placement "+placement);
        },delay);
    });
}
place(" i got the placement ",5000)
.then(()=>place(" Party time"),3000)
.then(()=>place(" i am working"),4000)
.then(()=>place(" layoff"),1000)
.catch((err)=>console.log(err));
*/
const myPromise1= new Promise((resolve,reject)=>{
setTimeout(()=>{
    reject
    ("promise 1");
       console.log ("promise 1");
},3000);
});
const myPromise2= new Promise((resolve,reject)=>{
setTimeout(()=>{
    reject
    ("promise 2");
       console.log ("promise 2");

},4000);
});
const myPromise3= new Promise((resolve,reject)=>{
setTimeout(()=>{
    reject
    ("promise 3");
       console.log ("promise 3");

},2000);
});

const myPromise4= new Promise((resolve,reject)=>{
setTimeout(()=>{
    reject
    ("promise 4");
       console.log ("promise 4");


},5000);
});
//Promise.all([myPromise1,myPromise2,myPromise3,myPromise4]);
//Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4]);
//Promise.any([myPromise1,myPromise2,myPromise3,myPromise4]);
//Promise.race([myPromise1,myPromise2,myPromise3,myPromise4]);
//if all resoleve,if all rejected ,if one rejected