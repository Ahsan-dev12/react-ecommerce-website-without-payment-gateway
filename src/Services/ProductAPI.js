const  ProductAPI = {

 FetchAllProducts : async () =>{

    const req = await fetch(`https://fakestoreapi.com/products`);
    const res = req.json();
    return res;
  
  },
  
  FetchByProductId : async (productId) => {
    const req = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const res = req.json();
    return res;
  },
  
 FetchBySearchQuery : async(query) => {
  
    const req = await fetch(`https://fakestoreapi.com/products`);
    const res = req.json();
    return res.filter((product)=> product.title.toLowerCase().includes(query));
    
  }
}


export default ProductAPI;

