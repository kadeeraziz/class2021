

module.exports.getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Ahmad'
    }

    setTimeout(()=>{
        callback(user)
    }, 3000)
    
}



