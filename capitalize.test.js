import { capitalizeFn,sumFn } from "./capitalize.js";
// const {capitalizeFn,sumFn} = require('./capitalize')

test('takes a string and returns it capitalized',
    ()=>{
        expect(capitalizeFn('word')).toBe('Word')
    })

test('takes  two numbers and returns sum',
    ()=>{
        expect(sumFn(1,2)).toEqual(3)
    })