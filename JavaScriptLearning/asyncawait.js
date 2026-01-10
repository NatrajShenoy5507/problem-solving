const uno =()=>{
    return "Iam One"
}
// const dos =async()=>{        
//     setTimeout(()=>{
//         return "Iam Two"
//     }, 3000)
    
// }
const dos = ()=>{
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        resolve("Iam Two")
       },3000)
    })
}
const tres =()=>{
    return "Iam Three"
}

const callMe = async()=>{
    let val1= uno()
    console.log(val1)
    let val2= await dos()   
    console.log(val2)
    let val3= tres()
    console.log(val3)
}

callMe()