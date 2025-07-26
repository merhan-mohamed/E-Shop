
import { useNavigate } from 'react-router-dom'

const OrderConfirmation = ({Orders}) => {
  const navigate = useNavigate()
  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
        <h2 className='text-2xl font-semibold mb-4'>Thank You For Your Orders</h2>
        <p>Your Order Has Been Placed Successfully You Will Recieve An Email Shortly</p>
        <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
          <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
          <p>Order Number:{Orders.orderNumber}</p>
          <div className='mt-4'>
            <h2 className='text-md font-semibold mb-2'>Shipping Information</h2>
            <p>{Orders.ShippingInformation.Address}</p>
            <p>{Orders.ShippingInformation.City}</p>
            <p>{Orders.ShippingInformation.Zipcode}</p>
          </div>
          <div className='mt-4'>
            <h4 className='text-md font-semibold mb-2'>Products Ordered</h4>
            {Orders.products.map((item) => 
            <div key={item.id} className='flex justify-between mt-2'>
              <p>{item.name} X {item.quantity}</p>
              <p>{item.price} X {item.quantity}</p>
            </div>
          )}
          </div>
          <div className='mt-4 flex justify-between'>
            <span>
              Total Price:
            </span>
            <span className='font-semibold'>
              {Orders.TotalPrice.toFixed(2)}
            </span>
          </div>
          <div className='mt-6'>
            <button className='bg-green-500 text-white py-2 px-4  hover:bg-green-600'>Order Tracking</button>
            <button 
            className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800' 
            onClick={()=> navigate("/")}>Continue Shopping</button>
          </div>
        </div>
    
    </div>
  )
}

export default OrderConfirmation
