const EventEmiiter=require('node:events');
const { addListener } = require('node:process');
const eventEmitter=new EventEmiiter();
//console.log(eventEmitter);
eventEmitter.on('g5student',()=>{
    console.log('started');
});
eventEmitter.emit('g5student');
eventEmitter.on('start',(number)=>{
    console.log(`this is ${number}`);
})
eventEmitter.emit('start',100);
eventEmitter.on('start1',(x,y)=>{
    console.log(`this is start1 ${x+y}`);
})
eventEmitter.emit('start1',5,4);
eventEmitter.addListener('start2',(x)=>{
    console.log("hello");
});
