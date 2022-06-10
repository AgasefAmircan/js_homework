function caesarsCipher(str) {
    let encoded = '';

    for (let i=0; i < str.length; i++) {
    let asciiNumber = str[i].charCodeAt();
        if (asciiNumber >= 65 && asciiNumber <= 77) {
            encoded += String.fromCharCode(asciiNumber + 13);
        } else if (asciiNumber >= 78 && asciiNumber <= 90) {
            encoded += String.fromCharCode(asciiNumber - 13); 
        } else {
            encoded += str[i];
        }
    }

    return encoded;
}
