// models/Cart.js
import mongoose from "mongoose";
const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    items: [
      {
        id: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        item_type: {
          type: String,
          required: true,
        },
        rate: {
          type: Number,
          required: true,
        },
        imageUrl: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        discount: {
          type: Number,
          default: 0, // Default to 0 if undefined
        },
        price: {
          type: Number,
          required: true,
        },
        discountPercent: {
          type: Number,
          default: 0, // Default to 0 if undefined
        },
        colors: {
          type: String,
          required: true,
        },
        size: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);
export default Cart;
