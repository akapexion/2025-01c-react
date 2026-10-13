import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {

  const [pData, setPData] = useState([]);

  const productsAPI = async() => {
    try{
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);
      setPData(response.data.products);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    productsAPI();
  }, []);

  return (
    <>

        <h1 className='font-bold text-3xl text-center'>Products</h1>

        <div className='products'>
            
            {pData.map(  (abc) => (
              <div>
                <img src={abc.thumbnail} alt="" />
               <p> {abc.title}  </p>
               <p> {abc.price}  </p>
               </div>
              )    )}


        </div>

    </>
  )
}

export default Products