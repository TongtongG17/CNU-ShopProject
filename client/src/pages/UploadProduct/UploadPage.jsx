import React, { useState } from 'react'
import FileUpload from '../../components/FileUpload'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axiosInstance from './../../utils/axios';

const continents = [
  { key: 1, value: '식품' },
  { key: 2, value: 'PC' },
  { key: 3, value: '노트북' },
  { key: 4, value: '마우스' },
  { key: 5, value: '키보드' },
  { key: 6, value: '옷' },
  { key: 7, value: '생활용품' },
]

function UploadPage() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    continents: 1,
    images: []
  })

  const userData = useSelector(state => state.user?.userData);
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }


  const handleImages = (newImages) => {
    setProduct((prevState) => ({
      ...prevState,
      images: newImages
    }))
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      writer: userData.id,
      ...product
    }

    try {
      await axiosInstance.post('/products', body);
      navigate('/');
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <section>
      <div className='text-center m-7'>
        <h1>상품 업로드</h1>
      </div>

      <form className='mt-6' onSubmit={handleSubmit}>

        <FileUpload images={product.images} onImageChange={handleImages} />

        <div className='mt-4'>
          <label htmlFor='title'>상품명</label>
          <input
            className='w-full px-4 py-2 bg-white border rounded-md'
            name="title" id="title" onChange={handleChange} value={product.title}
          />
        </div>

        <div className='mt-4'>
          <label htmlFor='description'>상품 설명</label>
          <input
            className='w-full px-4 py-2 bg-white border rounded-md'
            name="description" id="description" onChange={handleChange} value={product.description}
          />
        </div>

        <div className='mt-4'>
          <label htmlFor='price'>가격</label>
          <input
            className='w-full px-4 py-2 bg-white border rounded-md'
            type="number" name="price" id="price" onChange={handleChange} value={product.price}
          />
        </div>

        <div className='mt-4'>
          <label htmlFor='continents'>상품 종류</label>
          <select
            className='w-full px-4 py-2 mt-2 bg-white border rounded-md'
            name='continents' id='continents' onChange={handleChange} value={product.continents}
          >
            {continents.map(item => (
              <option key={item.key} value={item.key}>{item.value}</option>
            ))}
          </select>
        </div>

        <div className='mt-4'>
          <button
            type='submit'
            className='w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700'>
            생성하기
          </button>
        </div>

      </form>
    </section>
  )
}

export default UploadPage