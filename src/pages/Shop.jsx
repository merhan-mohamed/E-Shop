import { useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';

const Shop = () => {
  const products = useSelector((state) => state.Products.products)
  return (
     <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">{products.map((item, index) => (
        <ProductCard item={item} key={index}/>
      ))}</div>
    </div>

  )
}

export default Shop
