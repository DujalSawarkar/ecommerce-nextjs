"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  id: string;
  category: string;
  item_type: string;
  rate: string;
  imageUrl: string;
  title: string;
  discount: string;
  price: string;
  discountPercent: string;
  colors: string;
  totalQuantityAvailable: string;
}

const ProductForm = () => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    category: "",
    item_type: "",
    rate: "",
    imageUrl: "",
    title: "",
    discount: "",
    price: "",
    discountPercent: "",
    colors: "",
    totalQuantityAvailable: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const colorsArray = formData.colors.split(",").map((color) => color.trim());

    const data = {
      ...formData,
      rate: parseFloat(formData.rate),
      discount: parseFloat(formData.discount),
      price: parseFloat(formData.price),
      discountPercent: parseFloat(formData.discountPercent),
      totalQuantityAvailable: parseInt(formData.totalQuantityAvailable, 10),
      colors: colorsArray,
    };
  

    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const product = await response.json();
        
        // Reset form or show success message
      } else {
        const errorData = await response.json();
        console.error("Error creating product:", errorData);
        // Show error message
      }
    } catch (error) {
      console.error("Error creating product:", error);
      // Show error message
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Item Type:</label>
          <input
            type="text"
            name="item_type"
            value={formData.item_type}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rate:</label>
          <input
            type="number"
            step="0.1"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Discount:</label>
          <input
            type="number"
            step="0.01"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price:</label>
          <input
            type="number"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Discount Percent:</label>
          <input
            type="number"
            step="0.01"
            name="discountPercent"
            value={formData.discountPercent}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Colors (comma-separated):
          </label>
          <input
            type="text"
            name="colors"
            value={formData.colors}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Total Quantity Available:
          </label>
          <input
            type="number"
            name="totalQuantityAvailable"
            value={formData.totalQuantityAvailable}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
