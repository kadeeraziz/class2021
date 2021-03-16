/* var somePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
          //resolve('Hey, it worked')

          reject('unable to resolve')
    }, 2500)
  


}).then((msg)=>{
    console.log('success', msg);
}, (errMsg)=> {
    console.log('Error: ', errMsg);
}); 


/* var asyncAdd = (a, b) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a + b)
            }else{
                reject('Argument must be number.')
            }
        }, 2500)
    })
}  */


/* asyncAdd(8, 'd').then((res)=>{
    console.log('Response: ', res);
}, (errMessage)=>{
    console.log('Error: ', errMessage);
});


var callbackAdd = (a, b, callback) => {
    setTimeout(()=>{
        if(typeof a === 'number' && typeof b === 'number'){
            callback(a+b)
        }else{
            callback('Argument must be number');
        }
    }, 2500)
} */

/* callbackAdd(4,4, (res)=>{
    console.log(res);
}) */