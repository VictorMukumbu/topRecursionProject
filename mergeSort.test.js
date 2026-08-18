import { mergeSort } from "./mergeSort";
test('',()=>{
    expect(mergeSort([])).toEqual([]);

    expect(mergeSort([1])).toEqual([1]);

    expect(mergeSort([4, 2, 3, 1]))
        .toEqual([1, 2, 3, 4]);

    expect(mergeSort([5, 2, 8, 2, 1]))
        .toEqual([1, 2, 2, 5, 8]);

    expect(mergeSort([10, 9, 8, 7, 6]))
        .toEqual([6, 7, 8, 9, 10]);

}
)