import { fibsRec } from "./fibsRec";
describe('fibsRec tests',()=>{
    test('if num<2 ',()=>{
    expect(fibsRec(0)).toEqual([]);
    expect(fibsRec(1)).toEqual([0]);
    expect(fibsRec(2)).toEqual([0,1]);
    })
    test('fibsRec(8)===[0,1,1,2,3,5,8,13]',()=>{
        expect(fibsRec(8)).toEqual([0,1,1,2,3,5,8,13])
    })
}) 