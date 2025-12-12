import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const handleAddProduct = (productsData) => {
    setProduct((prev) => [...prev, productsData]);
  };

  return (
    <ProductContext.Provider value={{ product, handleAddProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
