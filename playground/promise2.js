









module.exports.getUser = (id)=> {
    return new Promise((resolve, reject)=>{
        var user = {
            id: id,
            username: 'azizqadeer',
            email: 'azizqadeer@gmail.com'
        }

        if(typeof id === 'number'){
            resolve(user)
        }

        reject('Argument must be a number.');
      
    });
}


