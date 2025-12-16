import { Star } from "lucide-react";

const ProductDetails = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg w-full">
      <div className="grid md:grid-cols-3 gap-8 p-6 md:p-8">
        {/* LEFT: Image */}
        <div className="md:col-span-1 flex justify-center items-start">
          <div
            className="w-full max-w-sm aspect-square bg-gray-50 rounded-xl 
                          flex items-center justify-center border border-gray-200 shadow-sm"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-6"
            />
          </div>
        </div>

        {/* RIGHT: Info */}
        <div className="md:col-span-2 flex flex-col">
          {/* Name + Rating */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-1 mt-2">
              {Array.from({ length: product.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-yellow-500"
                />
              ))}
              <span className="ml-2 text-sm text-gray-500 font-medium">
                {product.rating}.0
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-6">
            <span className="text-4xl font-extrabold text-pink-600">
              ${product.price}
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 text-base text-gray-700 leading-relaxed max-w-2xl">
            {product.description}
          </p>

          {/* Specs */}
          <div className="mt-8 grid grid-cols-2 gap-y-4 text-md border-t border-gray-100 pt-6">
            <DetailRow label="Category" value={product.category} />
            <DetailRow label="Specs" value={product.specs ?? "N/A"} />
          </div>

          {/* Purchase Section */}
          <div className="mt-8 flex items-center gap-8">
            <input
              type="number"
              min={1}
              max={product.quantity}
              className="w-32 rounded-lg border border-gray-300 px-4 py-3
               text-base focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
            />

            <span
              className={`text-base font-semibold ${
                product.quantity > 5 ? "text-green-600" : "text-red-500"
              }`}
            >
              {product.quantity > 5 ? "In stock" : "Low stock"}
            </span>
          </div>

          {/* CTA */}
          <button
            className="mt-8 w-full md:w-auto px-10 py-4 rounded-xl
                       bg-pink-600 text-white text-base font-semibold outline-0
                       hover:bg-pink-700 hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

/* Smaller, cleaner rows */
const DetailRow = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
      {label}
    </span>
    <span className="italic text-gray-800 font-semibold mt-1">{value}</span>
  </div>
);

export default ProductDetails;
