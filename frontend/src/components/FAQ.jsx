import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = {
  General: [
    {
      question: "What is Sabziko?",
      answer:
        "Sabziko is a real-time grocery delivery app that brings fresh and quality products directly to your doorstep within hours, ensuring convenience, speed, and reliability every time you shop with us.",
    },
    {
      question: "Is Sabziko available in my area?",
      answer:
        "We currently serve all major metropolitan cities and are rapidly expanding to new regions. Just enter your PIN code during checkout to verify service availability in your location.",
    },
    {
      question: "Do I need an account to place an order?",
      answer:
        "Yes, having an account allows us to save your preferences, show your order history, and provide you with real-time updates on your deliveries.",
    },
  ],
  Miscellaneous: [
    {
      question: "Can I change my contact number?",
      answer:
        "Yes, you can easily change your contact number anytime by visiting the profile settings in your dashboard and updating the relevant details.",
    },
    {
      question: "How do I apply coupons?",
      answer:
        "You can apply coupons during the checkout process. Simply enter the coupon code in the promo box, and the discount will be applied instantly if valid.",
    },
    {
      question: "Is there a minimum order value?",
      answer:
        "Yes, the minimum order value for free delivery is ₹200. Orders below this threshold may incur a small delivery charge to cover logistics.",
    },
  ],
  Delivery: [
    {
      question: "How fast is delivery?",
      answer:
        "Our standard delivery time is within 2–3 hours of placing the order. We also offer express delivery services in select areas for an even quicker experience.",
    },
    {
      question: "Can I schedule a delivery time?",
      answer:
        "Absolutely! During checkout, you can select your preferred delivery slot to ensure your groceries arrive exactly when it suits you best.",
    },
    {
      question: "What happens if I miss the delivery?",
      answer:
        "Our delivery agent will attempt to contact you. If unreachable, the order will either be rescheduled based on your availability or safely returned to our hub for further instructions.",
    },
  ],
  "Cancellation and return": [
    {
      question: "How do I cancel an order?",
      answer:
        'To cancel an order, go to the "My Orders" section in your account, select the order, and hit the cancel button before it is dispatched for delivery.',
    },
    {
      question: "What is the return policy?",
      answer:
        "We offer a 24-hour return window for perishable goods in case of quality concerns, and a 3-day return window for non-perishable items, provided they are unused and in original packaging.",
    },
    {
      question: "How long does the refund take?",
      answer:
        "Refunds are processed within 3–5 business days and credited back to your original method of payment. You’ll also receive a confirmation message once the refund is initiated.",
    },
  ],
};



const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const toggleQuestion = (category, index) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };
 

  return (
    <div className="max-w-3xl mx-auto mt-15 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>
      {Object.keys(faqData).map((category) => (
        <div key={category} className="mb-4">
          <button
            onClick={() => toggleCategory(category)}
            className="w-full text-left px-4 py-3  hover:bg-primary-dull/15 rounded-lg font-semibold text-2xl flex items-center justify-between cursor-pointer"
          >
            {category}
            {activeCategory === category ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {activeCategory === category && (
            <div className="mt-2 pl-4 border-l-2 border-primary-dull">
              {faqData[category].map((item, index) => (
                <div key={index} className="mb-2">
                  <button
                    onClick={() => toggleQuestion(category, index)}
                    className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-md text-xl flex justify-between items-center cursor-pointer"
                  >
                    {item.question}
                    {openQuestions[category] === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                  {openQuestions[category] === index && (
                    <div className="mt-1 px-4 py-3 bg-primary/10 text-lg  rounded-md">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <p className="mt-8 text-center text-lg text-gray-600">
        Still have questions? Reach out to our support team anytime — we're here
        to help make your shopping experience delightful and stress-free.
      </p>
    </div>
  );
};

export default FAQ;
