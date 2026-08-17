import { caesarCipher } from "./caesarCipher.js";

test('shift letters and return ciphered text',
    ()=>{
        expect(caesarCipher("abc", 3)).toBe("def");
        expect(caesarCipher("xyz", 3)).toBe("abc");
        expect(caesarCipher("Hello", 3)).toBe("Khoor");
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    }
)