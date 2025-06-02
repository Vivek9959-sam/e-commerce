import React from 'react'
import productList from './data'



function Home({setProductId}) {
  
  const handleAddToCart = (id) => {
    setProductId(id);
    
  };

  return (
    <>
    <div className='container-fluid px-5'>
        <div className='row  justift-content-center gap-4' >
         
          {
            productList?.map((product,index)=>{
              return(
                <div className='col-2 border rounded mt-2' key={product.id}>
              <div className='d-flex justify-content-center p-2' >
                <img src={product?.img} alt='...' className='product-width' />
              </div>
              <div className='px-2'>
              <div className='d-flex justify-content-between px-1'>
                <p className='m-0 font-bold font-size-10'>{product?.brand}</p>
                <p className='m-0 font-bold font-size-10'>{product?.model}</p>
              </div>
              <div className='px-1'>
                <p className='m-0'><span className='font-bold'>₹</span> {product?.price}</p>
                <p className='m-0 text-hiding'>{product?.color}</p>
              </div>
              <div className='px-2'>
                <button className='btn btn-primary p-1 w-100 mb-2' onClick={()=>handleAddToCart(product?.id)}>AddToCart</button>
              </div>
              </div>
            </div>

              )
            })
          }
            
        </div>
    </div>
    </>
  )
}

export default Home