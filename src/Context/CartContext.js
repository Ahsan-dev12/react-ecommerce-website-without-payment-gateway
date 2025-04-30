import React, { createContext, useState } from "react";

const MyContext = createContext();

function CartContext({children}) {
 const [cartItem, setCartItem, ] = useState([]);

// ADD TO CART FUNCTION
  const AddToCart = (product) => {

    const exsisting = cartItem.findIndex(item => item.id === product.id);

    if( exsisting !== -1){
          
      const updatedCart = [...cartItem];
      updatedCart[exsisting].quantity +=1;
      setCartItem(updatedCart);

      
    }else{

      setCartItem([...cartItem, {...product, quantity:1}]);

    }
    
  };

  // INCREASE QUNATITY FUNCTION
  const IncreaseQuantity = (productId) => {
    
    const exsisting = cartItem.findIndex(item => item.id === productId);

    if( exsisting !== -1){
          
      const updatedCart = [...cartItem];
      updatedCart[exsisting].quantity +=1;
      setCartItem(updatedCart);
      
    }

  };

  //DECREASE QUNATITY FUNCTION
  const DecreaseQuantity = (productId) => {

    const exsisting = cartItem.findIndex(item => item.id === productId);

    if( exsisting !== -1){

      const updatedCart = [...cartItem];

      if(updatedCart[exsisting].quantity > 1){
        updatedCart[exsisting].quantity -=1;
        setCartItem(updatedCart);
      }else {
        // quantity === 1 par sidha delete
        const removeItem = updatedCart.filter(item => item.id !== productId);
        setCartItem(removeItem);
      }
      
    }

  };

  //SUBTOTAL FOR SPECIFIC PRODUCT
  const SubTotalFunc = (productId) => {
    
    const findProduct = cartItem.find(item => item.id === productId);
    if(findProduct){
      return findProduct.price*findProduct.quantity;
    }

  };

  //ALL TOTAL 
  const TotalSum = () => {

    const total = cartItem.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total;
  };
  

  //REmOVE SPECIFIC ITEm
  const RemoveToItem = (productId) => {
    
    const removeItem = cartItem.filter(item => item.id !== productId);
    setCartItem(removeItem);

  };


// CLEAR ALL CART
  const ClearCart = () =>{

    setCartItem([]);

  }


  return (
    <>
      <MyContext.Provider
        value={{
          cartItem,
          AddToCart,
          IncreaseQuantity,
          DecreaseQuantity,
          SubTotalFunc,
          RemoveToItem,
          ClearCart,
          TotalSum
         
        }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
}

export { CartContext, MyContext };









