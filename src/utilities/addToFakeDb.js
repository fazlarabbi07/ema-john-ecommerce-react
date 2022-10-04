const addToFakeDb=id=>{
    let shoppingCart;
    //Checking "'shopping-cart'" is available or not
    // if availeable or not, make an object or empty object for shoppingCart through JSON.paese
const isShoppingCart=localStorage.getItem('shopping-cart');
    if(isShoppingCart)
    {
         shoppingCart=JSON.parse(isShoppingCart);
    }
    else
    {
        shoppingCart={};
    }
    //check and assign new quantity, if have quantity, then assign new quantity,
    // if not assign hard-coded 1
   const quantity= shoppingCart[id];
   if(quantity)
   {
        const newQuantity=quantity+1;
        shoppingCart[id]=newQuantity;
   }
   else
   {
    shoppingCart[id]=1;
   }
   //finally convert object to string through stringify.
   localStorage.setItem('shopping-cart',JSON.stringify (shoppingCart));
 
}

// This is my confusion part ,dont eliminate it.

// const lists=['a','b','c'];
// const student={};
// for(list of lists)
// {
//   student[list]=25;

// }
// console.log(student); 

export {addToFakeDb}