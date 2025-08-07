import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const SellerContact = () => {
  const { axios } = useAppContext();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("/api/contact");
        setMessages(res.data.messages || []);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      }
    };

    fetchMessages();
  }, []);
  

  return (
    <div className="  no-scrollbar w-full p-4 md:p-6 overflow-y-auto h-[95vh]">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Contact Messages
      </h2>
      {messages.length === 0 ? (
        <p className="text-gray-600">No contact messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white dark:bg-dark-2"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                {msg.name}
              </h3>
              <div className="flex items-center text-sm text-gray-600 gap-4 mb-2">
                <span className="flex items-center gap-1">
                  <FaEnvelope /> {msg.email}
                </span>
                <span className="flex items-center gap-1">
                  <FaPhoneAlt /> {msg.phone}
                </span>
              </div>
              <p className="text-gray-700">{msg.details}</p>
              <p className="text-xs text-right text-gray-400 mt-2">
                {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerContact;
