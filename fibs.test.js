import { fibs } from "./fibs";


describe('fibs tests',()=>{
    test('if num<2 ',()=>{
    expect(fibs(0)).toEqual([]);
    expect(fibs(1)).toEqual([0])
    expect(fibs(2)).toEqual([0,1])
    }),
    test('fibs(8)===[0,1,1,2,3,5,8,13]',()=>{
        expect(fibs(8)).toEqual([0,1,1,2,3,5,8,13])
    })
}) 
