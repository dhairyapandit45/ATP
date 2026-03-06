
//Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter
function findSum(...a){
  return a.reduce((acc,sum)=>acc+sum);
   }

   let y=findSum(10,20,30);
   console.log(y);