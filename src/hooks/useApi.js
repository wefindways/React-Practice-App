import { useEffect, useState } from "react";
import axios from "axios";

const useApi = () => {
  const [apiProducts, setApiProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");

        setApiProducts(response.data);
      } catch (error) {
        setError("Server Error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { apiProducts, loading, error };
};

export default useApi;
