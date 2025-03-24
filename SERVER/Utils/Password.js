
const generatePassword = ()=>{
  
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*"

    let len = characters.length;

    let password=""

    for (let i =0; i<7; i++){
        const randomIndex = Math.floor(Math.random()*len)
        password+=characters[randomIndex]
    }
       
    return password;

}

module.exports = generatePassword;