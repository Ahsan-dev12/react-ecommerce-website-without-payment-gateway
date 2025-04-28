import{useState,useEffect} from 'react'
import './Products.css';
import ProductAPI from '../Services/ProductAPI';
import ItemCard from '../Components/ItemCard';


function Products() {

  const [productList, setProductList] = useState([]);
  useEffect(() => {

    async function fetchProduct(){

      const product =  await ProductAPI.FetchAllProducts();
      setProductList(product);
      console.log(product);

    }

    fetchProduct();

   
  }, [])
  
  return (
    <>
    <div>
      {productList.map((product)=>(
        
        <ItemCard 
            key={product.id}  // Always add key when mapping
            image={product.image}
            title={product.title}
            price={product.price}
        />

      ))}
    </div>
   
    </>
  )
}

export default Products