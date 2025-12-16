import { useParams } from "react-router-dom";
import ProductDetails from "../component/ProductDetails";
import Layout from "../Layout/Layout";
import { useProduct } from "../hooks/ProductContext";
import { dynamicProducts } from "../hooks/useDynamic";
import BackButton from "../component/BackButton";

const DetailsPage = () => {
  const { id } = useParams();
  const { product } = useProduct();
  const combinedProducts = [...dynamicProducts, ...product];

  const selectedProducts = combinedProducts.find((p) => p.id === Number(id));

  return (
    <Layout>
      <div className="flex flex-col gap-5 max-w-full mx-auto mt-10 py-8 px-25">
        <BackButton/>
        {selectedProducts ? (
          
          <ProductDetails product={selectedProducts} />
          
        ) : (
          <p className="text-center text-gray-500">Product not found</p>
        )}
      </div>
    </Layout>
  );
};

export default DetailsPage;
