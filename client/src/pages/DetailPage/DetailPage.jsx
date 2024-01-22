import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from './Sections/ProductInfo'
import ProductImage from './Sections/ProductImage'
import axiosInstance from '../../utils/axios'
function DetailPage() {

  const {productId} = useParams();
  const [product, setProduct] = useState(null);
  //백엔드에 데이터 호출
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axiosInstance.get(`/products/${productId}?type=single`);
        console.log(response);
        setProduct(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();
  }, [productId])

  if (!product) return null;

  return (
    <section>
      <div className='text-center'>
        <h1 className='p-4 text-2xl'>{product.title}</h1>
      </div>

      <div className='flex gap-4'>
        <div className='w-1/2'>
          {/* ProductImage */}
          <ProductImage product={product} />
        </div>
        <div className='w-1/2'>
          {/* ProductInfo */}
          <ProductInfo product={product} />
        </div>
      </div>

    </section>
  )
}

export default DetailPage