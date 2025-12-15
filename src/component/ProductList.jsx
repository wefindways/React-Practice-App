import productsData from "../hooks/product";

const ProductList = () => {
  return (
    <div className="max-w-7xl mx-auto px-12 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {productsData.map((product, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden flex flex-col"
        > 
          {/* Product Image */}
          <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Product Details */}
          <div className="p-5 flex flex-col grow">
            <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
              {product.name}
            </h2>

            <div className="flex justify-between items-center mt-auto">
              <span className="text-xl font-bold text-pink-600">
                ${product.price}
              </span>

              <span className="text-sm bg-pink-100 text-pink-600 px-3 py-1 rounded-full capitalize">
                {product.category}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ProductList;
