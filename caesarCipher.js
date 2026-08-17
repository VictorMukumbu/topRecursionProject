export function caesarCipher(string,shift){
    return string
    .split("")
    .map(char=>{
        // if not a letter return
       if (!/[a-z]/i.test(char)) {
        return char;
        } 
        // check if char is isUpperCase
        const isUpperCase = char === char.toUpperCase();
        // convert to Number 0-25
        const code = char.toLowerCase().charCodeAt(0) - 97;
        // apply shift and wrap around alphabet
        const shifted = (code + shift + 26)% 26;
        // convert back to char
        let result = String.fromCharCode(shifted + 97);
        // restore uppercase
        if (isUpperCase) {
        result = result.toUpperCase();
        }
        return result
    }).join("")
}