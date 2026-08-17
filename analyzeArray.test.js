import { analyzeArray } from "./analyzeArray";

test('checks if array is empty',
    ()=>{
        expect(analyzeArray([])).toBe(null)
    })
test('checks if array length is correct ',
    ()=>{
        expect(analyzeArray([0]).length).toBe(1)
    })
test('checks if array average is correct ',
    ()=>{
        expect(analyzeArray([2,3,5,1,4]).average).toBe(3)
    })
test('checks if array min is correct ',
    ()=>{
        expect(analyzeArray([11,12,30]).min).toBe(11)
    })
test('checks if array max is correct ',
    ()=>{
        expect(analyzeArray([5,7,9]).max).toBe(9)
    })
test('checks if array contents are all numbers',
    ()=>{
        expect(()=>analyzeArray([5,7,"9"])).toThrow()
    })    