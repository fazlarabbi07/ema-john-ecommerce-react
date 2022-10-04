const deleteFromFakeDb=(id)=>{
   const isShoppingCartAvailable=JSON.parse(localStorage.getItem('shopping-cart'));
   if(isShoppingCartAvailable)
   {
   
        const quantity=isShoppingCartAvailable[id];
        // console.log(quantity);
        if(quantity>1)
        {
            const newQuantity=quantity-1;
            isShoppingCartAvailable[id]=newQuantity;
        }
        else if(quantity===1)
        {
            delete isShoppingCartAvailable[id];
        }
        else if(quantity===undefined)
        {
            alert('selected item not found in the "shopping-cart" ');
        }
}
   else
   {
    alert("Shopping-cart is not available")
   }


   localStorage.setItem('shopping-cart',JSON.stringify(isShoppingCartAvailable));
}
export {deleteFromFakeDb}