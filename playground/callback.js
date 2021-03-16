











var getUser = (id, callback) => {
    var user = {
        id: id,
        username: 'azizqadeer',
        email: 'aziz@gmail.com'
    }
    
    if(typeof id ==='number'){
        setTimeout(()=>{
            callback(user)
        }, 3000)
    }
}




module.exports = {
   getUser
}