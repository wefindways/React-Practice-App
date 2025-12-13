import ProductCard from "../component/ProductCard";
import Layout from "../Layout/Layout";
import Modal from "../component/Modal";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useProduct } from "../hooks/ProductContext";
import dynamicProducts from "../hooks/useDynamic";
import Category from "../component/Category";

const Home = () => {
  const [open, setOpen] = useState(false);
  const { product, handleAddProduct } = useProduct();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const combinedProducts = [...dynamicProducts, ...product];

  const filteredProducts =
    selectedCategory === "All"
      ? combinedProducts
      : combinedProducts.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 py-10 px-10 md:px-25">
        <Category
          combinedProducts={combinedProducts}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Product card(s) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-15 place-items-center">
          <ProductCard
            combinedProducts={combinedProducts}
            setOpen={setOpen}
            filteredProducts={filteredProducts}
          />

          <div
            onClick={() => setOpen(true)}
            className={`${
              selectedCategory === "All"
                ? "group h-90 w-full bg-white rounded-2xl shadow-sm hover:shadow-xl border border-dashed border-pink-400 transition-all duration-300 flex items-center justify-center cursor-pointer"
                : "hidden"
            }`}
          >
            <Plus
              size={40}
              className="text-pink-500 group-hover:scale-110 group-active:scale-100 transition"
            />
          </div>
        </div>

        {/* Modal */}
        {open && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <Modal
              setOpen={setOpen}
              onAdd={handleAddProduct}
              onClose={() => setOpen(false)}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
