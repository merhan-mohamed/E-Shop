import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import NotFound from "../assets/Images/not_found.png"



const FilteredData = () => {
    const FilteredData = useSelector((state) => state.Products.FilteredData)
  return (
    
     <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
        {FilteredData.length > 0 ? 
    (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">{FilteredData.map((item, index) => (
        <ProductCard item={item} key={index}/>
      ))}
      </div>
    </>
    )
    : 
    (
    <div className="flex justify-center">
        <img src={NotFound} alt="Not Found Product" />
    </div>
    )
    }
    </div>

  )
}

export default FilteredData
