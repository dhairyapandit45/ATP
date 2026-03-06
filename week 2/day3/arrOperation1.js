/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"*/

    const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//to get only inStock products
const r1 = cart.filter( available=> available.inStock==true);
console.log(r1);

//to create a new array with:  { name, totalPrice }
const r2 = cart.map(list=>{
      let itemPrice =list.price*list.quantity;
      return {name: list.name,totalPrice:itemPrice}
})
console.log(r2);


//to calculate grand total cart value
const r3 =cart.reduce((acc,total)=>acc+total.price,0)
console.log(r3);

//to get details of "Mouse"
const r4 = cart.find(item=>item.name=="Mouse");
console.log(r4);

//to find the position of "Keyboard"
const r5 = cart.findIndex(pos=>pos.name=="Keyboard");
console.log(r5);