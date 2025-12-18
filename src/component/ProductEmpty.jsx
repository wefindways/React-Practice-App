const ProductEmpty = ({ filteredProducts }) => {
  if (filteredProducts.length === 0) {
    return (
      <div className="w-full py-20 text-center text-gray-400 text-sm">
        No products found.
      </div>
    );
  }
};

export default ProductEmpty;
