export function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    const middle =Math.floor(arr.length/2)

    const left =arr.slice(0,middle)
    const right= arr.slice(middle)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    function merge(left,right){
        let i=0
        let j=0
        const result =[]
        while(i<left.length&&j<right.length){
            if(left[i]<right[j]){
                result.push(left[i])
                i++
            }
            else{
                result.push(right[j])
                j++
            }
            // if(left[i]===right[j]){
            //     result.push(left[i],right[j])
            //     i++
            //     j++
            // }           
        }
        result.push(...left.slice(i))
        result.push(...right.slice(j))

        return result
    }

    return merge(sortedLeft,sortedRight)

}