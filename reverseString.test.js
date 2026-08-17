import { reverseStringFn } from "./reverseString";

test('takes a string and reverses it',
    ()=>{
        expect(reverseStringFn("one")).toBe("eno")
        expect(reverseStringFn("John")).not.toBe("nhoJ")
    }
)