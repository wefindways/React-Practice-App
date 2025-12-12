import { useState } from "react";

export const useProductForm = (onAdd, onClose) => {
  const [form, setForm] = useState({
    image: "",
    name: "",
    category: "",
    description: "",
    rating: "",
    price: "",
    quantity: "",
  });

  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    }));
  };

  const handleSubmit = () => {
    onAdd(form);
    onClose();
    setForm({
      image: "",
      name: "",
      category: "",
      description: "",
      rating: "",
      price: "",
      quantity: "",
    });
  };

  return { form, handleOnChange, handleSubmit };
};
