import ProductCard from "../component/ProductCard";
import Layout from "../Layout/Layout";
import Modal from "../component/Modal";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useProduct } from "../hooks/ProductContext";
import dynamicProducts from "../hooks/useDynamic";

const Home = () => {
  const [open, setOpen] = useState(false);
  const { product, handleAddProduct } = useProduct();

  const combinedProducts = [...dynamicProducts, ...product];

  return (
    <Layout>
      {/* Modal */}
      <div className="min-h-screen bg-gray-100 py-10 px-10 md:px-25">
        {open && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <Modal
              setOpen={setOpen}
              onAdd={handleAddProduct}
              onClose={() => setOpen(false)}
            />
          </div>
        )}

        {/* Product card(s) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-15 place-items-center">
          {combinedProducts.map((product, index) => (
            <ProductCard key={index} product={product} setOpen={setOpen} />
          ))}

          <div
            onClick={() => setOpen(true)}
            className="group h-90 w-full bg-white rounded-2xl shadow-sm hover:shadow-xl border border-dashed border-pink-400 transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <Plus
              size={40}
              className="text-pink-500 group-hover:scale-110 group-active:scale-100 transition"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
