import  { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({setOrders}) => {
  const [BillingInfo, setBillingInfo] = useState(true)
  const [ShippingToggle, setShippingToggle] = useState(false)
  const [PaymentToggle, setPaymentToggle] = useState(false)
  const [PaymentMethod, setPaymentMethod] = useState("debbit card")
  const cart = useSelector((state) => state.Cart)

  {/***********To Store Shipping Info through Place order*****************/}

  const[ShippingInfo, setShippingInfo] = useState({
    Address:" ",
    City:" ",
    Zipcode:" "
  })

  const navigate = useNavigate()

  const HandleOrders = () => {
    const newOrder = {
      products:cart.products,
      orderNumber:"123456",
      ShippingInformation: ShippingInfo,
      TotalPrice: cart.totalPrice
    }
    setOrders(newOrder)
    navigate("/OrderConfirmation")
  }

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
      <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>

        {/**********Billing Address****************/}
        <div className='md:w-2/3'>
          <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between'
              onClick={() => setBillingInfo(!BillingInfo)}>
              <h3 className='text-lg font-semibold mb-2'>
                Billing Information
              </h3>
              {BillingInfo ? <FaAngleDown/> : <FaAngleUp/>}
            </div>

            <div className={`space-y-4 ${BillingInfo ? "" : "hidden"}`}>
              <div>
                <label className='block text-gray-700'>Name</label>
                <input 
                type="text" 
                name="name"
                placeholder='Enter Your Name'
                className='w-full px-3 py-2 border'/>
              </div>
         
              <div>
                <label className='block text-gray-700'>Email</label>
                <input 
                type="email"
                name="email"
                placeholder='Enter Your Email'
                className='w-full px-3 py-2 border'

                 />
              </div>
           
              <div>
                <label htmlFor="">Phone</label>
                <input 
                type="text"
                name="phone" 
                placeholder='Enter Your Phone'
                className='w-full px-3 py-2 border'/>
              </div>

            </div>

          </div>

          {/****Shipping Address*****/}
          <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between'
              onClick={() => setShippingToggle(!ShippingToggle)}>
              <h3 className='text-lg font-semibold mb-2'>
                Shipping Information
              </h3>
              {ShippingToggle ? <FaAngleDown/> : <FaAngleUp/>}
            </div>

            <div className={`space-y-4 ${ShippingToggle ? "" : "hidden"}`}>
              <div>
                <label className='block text-gray-700'>Address</label>
                <input 
                type="text" 
                name="address"
                placeholder='Enter Your Address'
                className='w-full px-3 py-2 border'
                onChange={(e) => setShippingInfo({...ShippingInfo, Address:e.target.value})}/>
              
              </div>
         
              <div>
                <label className='block text-gray-700'>City</label>
                <input 
                type="text"
                name="city"
                placeholder='Enter Your City'
                className='w-full px-3 py-2 border'
                onChange={(e) => setShippingInfo({...ShippingInfo, City:e.target.value})}

                 />
              </div>
           
              <div>
                <label htmlFor="">Zip Code</label>
                <input 
                type="text"
                name="Code" 
                placeholder='Enter Your Zip Code'
                className='w-full px-3 py-2 border'
                onChange={(e) => setShippingInfo({...ShippingInfo, Zipcode:e.target.value})}/>
              </div>
              
            </div>

          </div>


          {/****Payment Method******/}
           <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between'
              onClick={() => setPaymentToggle(!PaymentToggle)}>
              <h3 className='text-lg font-semibold mb-2'>
                Payment Method
              </h3>
              {PaymentToggle ? <FaAngleDown/> : <FaAngleUp/>}
            </div>

            <div className={`space-y-4 ${PaymentToggle ? "" : "hidden"}`}>

              <div>
                <input 
                type="radio" 
                name="payment"
                onChange={() => setPaymentMethod("debbit card")}
                checked={PaymentMethod === "debbit card"} />
                <label className='text-gray-700 ml-1'>Debit Card</label>
              </div>
         
             <div>
                <input 
                type="radio" 
                name="payment"
                onChange={() => setPaymentMethod("Cash On Delivery")}
                checked={PaymentMethod === "Cash On Delivery"} />
                <label className=' text-gray-700 ml-1'>Cash On Delivery</label>
              </div>
              {PaymentMethod === "debbit card" && (
                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                  <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                  <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                    <input type="text" placeholder='Enter Your Card Number' className='border p-2 w-full rounded'
                    required/>
                  </div>

                   <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                    <input 
                    type="text" 
                    className='border p-2 w-full rounded'
                    placeholder='Enter Your Card Holder Name'/>
                  </div>

                   <div className='flex justify-between mb-4'>
                    <div className='w-1/2 mr-2'>
                    <label 
                    className='block text-gray-700 font-semibold mb-2'>Expire Date
                    </label>
                    <input type="text"
                     placeholder='MM/YY'
                     className='border p-2 w-full rounded'
                     required/>
                  </div>

                   <div className='w-1/2 ml-2'>
                    <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
                    <input type="text"
                     placeholder='CVV'
                     className='border p-2 w-full rounded'
                     required/>
                  </div>
                </div>
                </div>
              )}
            </div>
          </div>



        </div>

        {/******Place Order Section******/}
        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
              <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
              <div className='space-y-4'>
                {cart.products.map((item) => (
                <div key={item.id} className='flex justify-between'>
                  <div className='flex items-center'>
                    <img 
                    src={item.image} 
                    alt={item.name} 
                    className='w-16 h-16 object-contain rounded'/>
                    <div className='ml-4'>
                      <h4 className='text-md font-semibold '>{item.name}</h4>
                      <p className='text-gray-600'>&{item.price} X {item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
              </div>
              <div className='mt-4 border-t pt-4'>
                <div className='flex justify-between'>
                  <span>Total Price:</span>
                  <span className='font-semibold'>
                    {cart.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
              <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
              onClick={HandleOrders}>Place Order</button>
        </div>

      </div>
    
    </div>
  )
}

export default Checkout
