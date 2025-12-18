import { useState } from "react";

const ProductCategory = ({ combinedProducts, setSelectedCategory }) => {
  const uniqueCategories = [
    "All",
    ...new Set(combinedProducts.map((product) => product.category)),
  ];

  const [active, setActive] = useState("All");

  return (
    <>
      <div className="flex items-center justify-between pt-6 pb-10">
        <div className="flex items-center gap-3 flex-wrap">
          {uniqueCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCategory(category);
                setActive(category);
              }}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 cursor-pointer
              ${
                active === category
                  ? "bg-pink-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
