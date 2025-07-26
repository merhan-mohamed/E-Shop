import WomanCategory from "../assets/Images/woman.png";
import ManCategory from "../assets/Images/man.png";
import KidCategory from "../assets/Images/kid.png";

const Categories = () => {
  const Categories = [
    {
      title:"Men",
      imageURL: ManCategory
    },
    { 
      title:"Woman",
      imageURL: WomanCategory
    },
    { title:"Kid",
      imageURL: KidCategory
    },
  ]
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
      {Categories.map((item, index) => (
      <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        <img src={item.imageURL} alt={item.title} className="w-full h-full object-cover rounded-lg shadow-md"/>
        <div className="absolute top-20 left-12">
          <p className="text-xl font-bold">{item.title}</p>
          <p className="text-gray-600">View All</p>
        </div>
      </div>
    ))}
    </div>
  )
}

export default Categories
