function caesarsCipher(str,num) {
    let encoded = '';
    for (let i=0; i < str.length; i++) {
       encoded+=String.fromCharCode(str.charCodeAt(i)+num);
    }
    return encoded;
}