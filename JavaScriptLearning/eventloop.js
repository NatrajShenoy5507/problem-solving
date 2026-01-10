// while(queue.waitForMessage()){
//     queue.processNexttask
// }

const uno =()=>{
    console.log("Iam One")
}

const dos =()=>{
    setTimeout(()=>{
        console.log("Woohooooo")
    }, 3000)
    console.log("Iam Two")
}

const tres =()=>{
    console.log("Iam Three")
}

uno()
dos()
tres()