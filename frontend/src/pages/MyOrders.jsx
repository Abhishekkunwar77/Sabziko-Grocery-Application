import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency, axios, user } = useAppContext();

  const fetchMyOrders = async () => {
    try {
      const { data } = await axios.get(`/api/order/user?userId=${user._id}`);
      if (data.success) {
        setMyOrders(data.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMyOrders();
    }
  }, [user]);

  return (
    <div className="mt-16 pb-16 min-h-[500px]">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My orders</p>
        <div className=" w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      {myOrders.map((order) => (
        <div
          key={order._id}
          className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
        >
          <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
            <span>OrderId: {order._id}</span>
            <span>
              Payment:{" "}
              {order.paymentType === "Online"
                ? order.isPaid
                  ? "Online Payment (Paid)"
                  : "Online Payment (Pending)"
                : "COD"}
            </span>
            <span>
              Total Amount: {currency}
              {(order.amount.toFixed(2))}
            </span>
          </p>

          {order.items.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white text-gray-500/70 ${
                order.items.length !== index + 1 && "border-b"
              } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-4-4xl`}
            >
              <div className="flex items-center mb-4 md:mb-0">
                {item.product ? (
                  <>
                    <div className="bg-primary/10 p-4 rounded">
                      <img
                        src={item.product.image?.[0]}
                        alt={item.product.name}
                        className="w-16 h-16"
                      />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-medium text-gray-800">
                        {item.product.name}
                      </h2>
                      <h2>Category: {item.product.category}</h2>
                    </div>
                  </>
                ) : (
                  <div className="ml-4 text-red-500 text-sm">
                     Product information not available<br></br> (may be deleted)
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0">
                <p>Quantity: {item.quantity || "1"}</p>
                <p>Status: {order.status}</p>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>

              <p className="text-primary text-lg font-medium">
                Amount: {currency}
                {item.product?.offerPrice
                  ? (item.product.offerPrice * item.quantity).toFixed(2)
                  : 0}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
