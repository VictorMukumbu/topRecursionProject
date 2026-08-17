import { calculator } from "./calculator";

describe("calculator",()=>{

test('take two numbers and return sum',
    ()=>{
        expect(calculator.add(2,3)).toBe(5)
    }
)
test('take two numbers and return product',
    ()=>{
        expect(calculator.multiply(2,3)).toBe(6)
    }
)
test('take two numbers and return divided',
    ()=>{
        expect(calculator.divide(4,2)).toBe(2)
    }
)
test('take two numbers and return subtracted',
    ()=>{
        expect(calculator.subtract(2,3)).toBe(-1)
        expect(calculator.subtract(3,3)).toBe(0)
    }
)})