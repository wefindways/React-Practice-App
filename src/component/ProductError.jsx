const ProductError = ({ error }) => {
  if (error) {
    return (
      <div className="w-full py-20 flex justify-center">
        <div className="bg-red-50 text-red-600 px-6 py-4 rounded-xl text-md shadow-sm">
          ❌ {error}
        </div>
      </div>
    );
  }
};

export default ProductError;
