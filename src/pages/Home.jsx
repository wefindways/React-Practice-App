import ProductList from "../component/ProductList";
import Layout from "../Layout/Layout";
import AddProduct from "../component/AddProduct";

const Home = () => {
  return (
    <Layout>
      <AddProduct />
      <ProductList />
    </Layout>
  );
};

export default Home;
