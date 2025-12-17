import { Star } from "lucide-react";
import { useState } from "react";
import { formatCurrency } from "../utils/FormatCurrency";

const ProductDetails = ({ product }) => {
  const [selectedQuantity, setSeletedQuantity] = useState(1);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg w-full">
      <div className="grid md:grid-cols-3 gap-16 p-6 md:p-8">
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

            <div className="flex items-center gap-1 mt-3">
              {Array.from({ length: product.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-500 fill-yellow-500"
                />
              ))}
              <span className="ml-2 text-sm text-gray-500 font-medium">
                {product.rating}.0
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            {product.description}
          </p>

          {/* Price */}
          <div className="mt-6">
            <span className="text-4xl font-extrabold text-pink-600">
              ${product.price}
            </span>
          </div>

          {/* Specs */}
          <div className="mt-6 space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm">
            <DetailRow label="Category" value={product.category} />
            <DetailRow label="Specification" value={product.specs ?? "N/A"} />
          </div>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center gap-3 text-md">
            <span className="font-medium text-gray-800 w-24">Quantity</span>
            <input
              type="number"
              min={1}
              value={selectedQuantity}
              max={product.quantity}
              onChange={(e) => setSeletedQuantity(Number(e.target.value))}
              className="w-20 px-2 py-1 border border-gray-300 rounded-lg text-gray-800 focus:outline-0 focus:ring-2 focus:ring-pink-500"
            />
            <span
              className={`font-semibold ${
                product.quantity > 5 ? "text-green-600" : "text-red-500"
              }`}
            >
              {product.quantity > 5
                ? `${product.quantity} pcs available`
                : "Low Stock"}
            </span>
          </div>

          {/* Subtotal */}
          <div className="mt-3 flex items-center text-md">
            <span className="font-medium text-gray-800 w-24">Subtotal:</span>
            <span className="text-pink-600 font-bold ml-2">
              {formatCurrency(selectedQuantity * product.price)}
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

const DetailRow = ({ label, value }) => (
  <div className="flex gap-5 text-sm">
    <span className="font-medium text-gray-700 w-24">{label}:</span>
    <span className="text-gray-800 w-full">{value}</span>
  </div>
);

export default ProductDetails;
