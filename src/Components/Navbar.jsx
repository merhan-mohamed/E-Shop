import { Link, useNavigate } from 'react-router-dom'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import Modal from './Modal'
import { setSearchItem } from '../Redux/productslice'


const Navbar = () => {
  const [openModel, setOpenModel] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [Search, setSearch] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  {/********Login & Register ***********/}
  const OpenSignUp = () => {
    setIsLogin(false)
    setOpenModel(true)
  }

   const OpenLogin = () => {
    setIsLogin(true)
    setOpenModel(true)
  }

  {/********Login & Register ***********/}

  {/**********HandleSearch**********************/}
    const HandleSearch = (e) => (
      e.preventDefault(),
      dispatch(setSearchItem(Search)),
      navigate('/filter-data')

    )

  {/**********HandleSearch**********************/}

  const products = useSelector((state) => state.Cart.products )  
  return (
    <nav className='bg-white shadow-md'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
          <div className='text-lg font-bold'>
            <Link to="/">E-SHOP</Link>
          </div>

          <div className='relative flex-1 mx-4'>
            <form onSubmit={HandleSearch}>
              <input 
              type='text' 
              placeholder='Search Product...' 
              className='w-full border px-4 py-2 rounded-sm'
              onChange={(e) => setSearch(e.target.value)}/>
              <FaSearch 
              className='absolute top-3 right-3 text-red-500' 
              />
            </form>
          </div>

          <div className='flex items-center space-x-4'>
            <Link to="/cart" className='relative'>
              <FaShoppingCart className='text-lg'/>
              {products.length > 0 && (
                <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>{products.length}</span>)}
            </Link>
            <button className='hidden md:block'
            onClick={() => setOpenModel(true)}>
              Login | Register
            </button>
            <button className='block md:hidden'>
              <FaUser/>
            </button>
          </div>
        </div>

        {/****Links in NavBar******/}


        <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
          <Link to="/" className='hover:underline'>Home</Link>
          <Link to="/Shop" className='hover:underline'>Shop</Link>
          <Link to="/" className='hover:underline'>Contact</Link>
          <Link to="/" className='hover:underline'>About</Link>
        </div>

        <Modal openModel={openModel} setOpenModel={setOpenModel} >
          {isLogin ? <Login OpenSignUp={OpenSignUp}/> : 
          <Register OpenLogin={OpenLogin}/> }
        </Modal>
    </nav>
  )
}

export default Navbar
