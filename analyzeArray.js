export function analyzeArray(array){
    if (array.length===0){
        return null
    }
    for(let i=0;i<array.length;i++){
        if (typeof array[i] !=='number'){
            throw new Error("all array contents must be numbers")
        }
    }
    const arrayLength =array.length
    const arrayMin =Math.min(...array)
    const arrayMax =Math.max(...array)
    const arraySum = array.reduce((accumulator,value)=>accumulator+value,0)
    const arrayAverage = arraySum/arrayLength
    const arrayObject = {
        average:arrayAverage,
        min:arrayMin,
        max:arrayMax,
        length:arrayLength
    } 
    return arrayObject
}