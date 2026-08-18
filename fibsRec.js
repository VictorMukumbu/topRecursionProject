export function fibsRec(num){
   console.log("This was printed recursively"); 
   

   if(num===0){
    return [] 
   }  
   if(num===1){
    return[0]
   }
   if(num===2){
    return[0,1]
   }

   const  fibArr =fibsRec(num-1)
    const next =(fibArr[fibArr.length-1]) +
        (fibArr[fibArr.length-2])
    fibArr.push(next)
   
   return fibArr
}
fibsRec(8)