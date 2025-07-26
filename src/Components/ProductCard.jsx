import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../Redux/cartslice'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
  const dispatch = useDispatch()
  const HandleAddToCart = (e, item) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(AddToCart(item))
    alert("Product Added Succesfully")
  }
  return (
    <Link to={`/product/${item.id}`}>
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
      <img 
      src={item.image} 
      alt={item.name} 
      className='w-full h-48 object-contain mb-4'/>
      <h3 className='text-lg font-semibold'>{item.name}</h3>
      <p className='text-gray-500'>${item.price}</p>
      <div className='flex items-center mt-2'>
        <FaStar className='text-yellow-500'/> 
        <FaStar className='text-yellow-500'/>  
        <FaStar className='text-yellow-500'/>  
        <FaStar className='text-yellow-500'/>  
        <FaStar className='text-yellow-500'/> 
      </div>

      <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transform transition-transform duration-300'
      onClick={(e) => HandleAddToCart(e, item)}>
        <span className='group-hover:hidden cursor-pointer'>+</span>
        <span className='hidden group-hover:block cursor-pointer'>Add To Cart</span>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
