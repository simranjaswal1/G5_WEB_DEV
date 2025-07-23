
Promise.any([myPromise,myPromise2,myPromise3,myPromise4,myPromise5])
.then((res)=>console.log(res))
.catch((rej)=>console.log(rej));