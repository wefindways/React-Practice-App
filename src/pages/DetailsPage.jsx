import { useParams } from "react-router-dom";
import ProductDetails from "../component/ProductDetails";
import Layout from "../Layout/Layout";
import { useProduct } from "../hooks/ProductContext";
import BackButton from "../component/BackButton";
import useApi from "../hooks/useApi";

const DetailsPage = () => {
  const { id } = useParams();
  const { product } = useProduct();
  const { dynamicProducts } = useApi();
  const combinedProducts = [...dynamicProducts, ...product];

  const selectedProducts = combinedProducts.find((p) => p.id === Number(id));

  return (
    <Layout>
      <div className="flex flex-col gap-5 max-w-full mx-auto py-15 px-25">
        <BackButton />
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
