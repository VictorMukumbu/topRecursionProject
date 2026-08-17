export function fibs(num){
   console.log("This was printed iteratively"); 
   

   if(num<2){
    return [num] 
   }  

   const  fibArr =[0,1]
   for(let i=2;i<num;i++){
    const next =(fibArr[fibArr.length-1]) +(fibArr[fibArr.length-2]
)
    fibArr.push(next)
   }
   return fibArr
}
fibs(8)