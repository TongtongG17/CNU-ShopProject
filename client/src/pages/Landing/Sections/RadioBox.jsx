import React from 'react'

const RadioBox = ({ prices, checkedPrice, onFilters }) => {
  return (
    <div className='p-2 mb-3 bg-gray-100 rounded-md h-72'>
      <span className='text-xl font-bold mb-5 block'>가격</span>
      {prices?.map(price => (
        <div key={price._id} className='mb-2'>
          <input
            checked={checkedPrice === price.array}
            onChange={e => onFilters(e.target.value)}
            type="radio"
            id={price._id}
            value={price._id}
          />
          {" "}
          <label htmlFor={price._id}>{price.name}</label>
        </div>
      ))}

    </div>
  )
}

export default RadioBox