const ProductLoading = ({ loading }) => {
  if (loading) {
    return (
      <div className="w-full py-20 flex justify-center items-center">
        <div className="flex items-center gap-3 text-gray-500">
          <div className="h-5 w-5 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-md">Loading products...</span>
        </div>
      </div>
    );
  }
};

export default ProductLoading;
