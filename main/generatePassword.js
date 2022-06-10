function generatePassword(passwordLength) {
    var password=''
    var chars = 
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for(let i=1;i<passwordLength;i++){
        let x=Math.floor(Math.random()*chars.length+1);
        password+=chars.charAt(x);
    }
    return password;
} 
generatePassword(12)