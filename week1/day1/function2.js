// write a function that takes array as args and return their sum
let arrsum = function(a){
    let i;
let sum=0;
for(i=0;i<a.length;i++)
{
     sum += a[i];
}
return sum;
}

let result =arrsum([1,2,3,4,5]);
console.log(result);