/* write a function that takes arr and search element as args and return index of that element 
and "not found" if the elemntnot found */
let find = function(a,b)
{
  let i;
for(i=0;i<a.length;i++)
{
     if(a[i]===b)
     {
        return i;
     }
    

}
return "not found";
}

let result =find([1,2,3,4,5],5);
console.log(result);
