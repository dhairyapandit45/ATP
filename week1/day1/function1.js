// write a function that takes 3 number args and returns biggest

let big = function (a,b,c){
    if(a>b){
    if(a>c){
      return a;
    }
    else 
    {
        return b;

    }
 }
 else if(b>c)
 {
   return b;
    
 }
else {
    return c;
}
}

let result=big(1,2,3);
console.log(result)