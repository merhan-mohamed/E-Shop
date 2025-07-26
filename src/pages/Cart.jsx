import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from "../assets/Images/emptycart.png"
import { FaTrashAlt } from 'react-icons/fa';
import ChangeAddress from '../Components/ChangeAddress';
import Modal from '../Components/Modal';
import { DecreaseQuantity, IncreaseQuantity, RemoveFromCart } from '../Redux/cartslice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const CartDetails = useSelector((state) => state.Cart)
  const cart = useSelector((state) => state.Cart.products)
  const [address, setAddress] = useState("main street, 0012")
  const [openModel, setOpenModel] = useState(false)
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      {cart.length > 0 ? 
      <div>
        <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
        <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
          <div className='md:w-2/3'>
          <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
            <p>PRODUCTS</p>
            <div className='flex space-x-8'>
              <p>PRICE</p>
              <p>QUANTITY</p>
              <p>SUBTOTAL</p>
              <p>REMOVE</p>
            </div>
          </div>
        
            {cart.map((item) => (
              <div className='flex items-center justify-between p-3 border-b'
              key={item.id}>
                <div className='md:flex items-center space-x-4'>
                  <img src={item.image} alt={item.id} className='w-16 h-16 object-contain rounded' />
                <div className='flex-1 ml-4'>
                  <h3 className='text-lg font-semibold'>{item.name}</h3>
                </div>
                </div>

                <div className='flex space-x-12 items-center'>
                  <p>${item.price}</p>
                  <div className='flex items-center justify-center border'>
                    <button 
                    className='text-xl font-bold px-1.5 border-r'
                    onClick={() => dispatch(DecreaseQuantity(item.id))}>-</button>
                    <p className='text-xl px-2'>{item.quantity}</p>
                    <button 
                    className='text-xl px-1 border-l'
                    onClick={() => dispatch(IncreaseQuantity(item.id))}>+</button>
                  </div>
                  <p>${(item.quantity * item.price).toFixed(2)}</p>
                  <button 
                  className='text-red-500 hover:text-red-700'
                  onClick={() => dispatch(RemoveFromCart(item.id))}>
                    <FaTrashAlt/>
                  </button>
                </div>
                </div>
             
             
            ))}
          </div>

          {/*****Prices*****/}

          <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
            <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
            <div className='flex justify-between mb-5 border-b pb-1'>
              <span className='text-sm'>Total Items:</span>
              <span>{CartDetails.totalQuantity}</span>
            </div>
            <div className='mb-4 border-b pb-2'>
              <p>Shipping:</p>
              <p className='ml-2'>Shipping to:
              <span className='text-xs font-bold'>{address}</span>
              </p>
              <button className='text-blue-500 hover:underline mt-1 ml-2'
              onClick={() => setOpenModel(true)}>Change Address</button>
            </div>

            <div className='flex justify-between mb-4'>
              <span>Total Price:</span>
              <span>{CartDetails.totalPrice.toFixed(2)}</span>
            </div>

            <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800'
            onClick={() => Navigate("/Checkout")}>
              Proced to Checkout 
            </button>
          </div>
        </div>
        <Modal
         openModel={openModel}
         setOpenModel={setOpenModel}

        >
          <ChangeAddress setOpenModel={setOpenModel} setAddress={setAddress} />
        </Modal>

      </div> : 
      <div className='flex justify-center items-center'>
        <img src={EmptyCart} alt="No items founded" className='h-96' />
      </div>}
    </div>
  )
}

export default Cart
