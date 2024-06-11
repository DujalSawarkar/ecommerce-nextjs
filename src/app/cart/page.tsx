import React from "react";
// import RouteCard from "../components/routeCard/routeCard";
import { FiTag } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Image from "next/image";

const Cart = () => {
  // Dummy cart data
  const Cart = [
    {
      _id: 1,
      title: "Cool Graphic T-Shirt",
      imageUrl: "/imgs/tshirt1.png",
      price: 30.0,
      discount: 25.0,
    },
    {
      _id: 2,
      title: "Stylish Denim Jacket",
      imageUrl: "/imgs/jacket1.png",
      price: 80.0,
      discount: 70.0,
    },
  ].map((item) => ({
    ...item,
    dstprice: item.discount || 0,
    actprice: item.price || 0,
    showprice: item.discount || item.price || 0,
  }));

  //   const actprice = Cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
  //   const dstprice = Cart.reduce((accumulator, currentValue) => accumulator + currentValue.discount, 0);
  //   const showprice = dstprice;

  return (
    <div>
      {/* <RouteCard /> */}
      <h1 className="text-4xl font-bold leading-12 uppercase ml-4 mb-4">
        Your cart
      </h1>
      <div className="w-11/12 mx-auto flex gap-4">
        <div className="w-2/3 border border-gray-200 rounded-xl">
          {Cart.length === 0 ? (
            <div className="loader-div">
              <div className="loader"></div>
            </div>
          ) : (
            Cart.map((e) => (
              <div className="cart-product flex items-center" key={e._id}>
                <Image
                  src={e.imageUrl}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <RiDeleteBin5Fill className="delete ml-4 text-red-500 cursor-pointer" />
                <div className="ml-4">
                  <div className="productr-title">
                    <h2 className="text-lg font-semibold">{e.title}</h2>
                  </div>
                  <div className="Size-text">
                    <p className="text-base">Size :</p>
                    <div></div>
                  </div>
                  <div>
                    <p className="text-base">Color :</p>
                    <div></div>
                  </div>
                  <div className="price-text">
                    <p className="text-xl font-semibold">
                      ${e.discount ? e.discount : e.price}
                    </p>
                  </div>
                  <div className="product-btn-div-inner flex items-center mt-4">
                    <button className="w-8 h-8 bg-gray-200 text-xl font-semibold">
                      -
                    </button>
                    <p className="mx-2">1</p>
                    <button className="w-8 h-8 bg-gray-200 text-xl font-semibold">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="w-1/3 border border-gray-200 rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="order-summery">
            <p className="text-base">Subtotal</p>
            <h3 className="text-base font-semibold">${Cart[0].actprice}</h3>
          </div>
          <div className="order-summery">
            <p className="text-base">Discount </p>
            <h4 className="text-base font-semibold">-${Cart[0].dstprice}</h4>
          </div>
          <div className="order-summery">
            <p className="text-base">Delivery Fee</p>
            <h3 className="text-base font-semibold">$15</h3>
          </div>
          <hr className="my-4 border-t border-gray-200" />
          <div className="order-summery">
            <p className="text-base">Total</p>
            <h3 className="text-base font-semibold">${Cart[0].showprice}</h3>
          </div>
          <div className="order-summery flex items-center my-4">
            <FiTag className="tag mr-2" />
            <input
              type="text"
              placeholder="Add promo code"
              className="w-52 h-12 px-4 border border-gray-300 rounded-full text-base"
            />
            <button className="w-24 h-12 px-4 bg-black text-white font-semibold">
              Apply
            </button>
          </div>
          <button className="Check-btn w-full h-14 rounded-full bg-black text-white">
            Go to Checkout{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
