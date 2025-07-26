import React from 'react'

const Register = ({OpenLogin}) => {
  return (
      <div>
      <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
      <form>
        <div className='mb-4'>
            <label className='block text-gray-700'>Name</label>
            <input type="text"  
            className='w-full px-3 py-2 border' 
            placeholder='Enter Your Name'/>
        </div>

        <div className='mb-4'>
            <label className='block text-gray-700'>Password</label>
            <input type="password" 
            className='w-full px-3 py-2 border'
            placeholder='Enter Your Password'
             />
        </div>

       
        <div className='mb-4'>
            <button className='w-full bg-red-600 text-white py-2' type='submit'>Sign Up</button>
        </div>
      </form>

      <div className='text-center'>
        <span className='text-gray-700'>Already Have an Account?</span>
        <button className='text-red-800' onClick={OpenLogin}>Login</button>
      </div>
    </div>
  )
}

export default Register
