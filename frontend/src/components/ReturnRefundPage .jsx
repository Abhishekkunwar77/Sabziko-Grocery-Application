import React from "react";
import {
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaMoneyBillWave,
  FaSyncAlt,
  FaClipboardList,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaQuestionCircle,
  FaUndoAlt,
  FaInfoCircle,
} from "react-icons/fa";

const ReturnRefundPage = () => {
  return (
    <div className="bg-white text-gray-800 p-6 sm:p-10 max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
          Return & Refund Policy
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Sabziko, we are committed to delivering the highest quality
          groceries and customer service. If any product does not meet your
          expectations, please review our policy below for resolution options.
        </p>
      </header>
      {/* Policy Overview */}
      <section className="mb-12">
        <div className="bg-primary-dull/10 border-l-4 border-primary-dull p-6 rounded-r-lg">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Policy Overview
          </h2>
          <p className="text-gray-700 mb-2">
            Our return and refund policy is designed to protect both our
            customers and business interests while maintaining the highest
            standards of service.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Clear eligibility criteria for returns and refunds</li>
            <li>Transparent timelines for resolution</li>
            <li>Multiple convenient resolution options</li>
            <li>Dedicated customer support channels</li>
          </ul>
        </div>
      </section>

      {/* Return Window */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-gray-800">
          <FaClock className="text-primary-dull" /> Return Timeframes
        </h2>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block bg-green-100 text-green-800 p-1 rounded-full mr-3 mt-0.5">
                <FaClock className="text-sm" />
              </span>
              <div>
                <strong className="text-gray-800">Perishable Items</strong>{" "}
                (fruits, vegetables, dairy):
                <span className="text-gray-700">
                  {" "}
                  Return requests must be submitted within{" "}
                  <strong>24 hours</strong> of delivery
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-green-100 text-green-800 p-1 rounded-full mr-3 mt-0.5">
                <FaClock className="text-sm" />
              </span>
              <div>
                <strong className="text-gray-800">Non-Perishable Items</strong>{" "}
                (packaged goods, household products):
                <span className="text-gray-700">
                  {" "}
                  Return requests must be submitted within{" "}
                  <strong>7 days</strong> of delivery
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Eligibility */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-5 text-gray-800">
          <FaClipboardList className="text-primary-dull" /> Return Eligibility
          Criteria
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="flex items-center gap-3 font-semibold text-lg text-gray-800 mb-4">
              <FaCheckCircle className="text-green-600" /> Eligible for Return
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full w-5 h-5 mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-700">
                  Unopened packaged items in original condition with seals
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full w-5 h-5 mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-700">
                  Incorrect items received (verified against order details)
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full w-5 h-5 mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-700">
                  Manufacturer defects or damage evident upon delivery
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full w-5 h-5 mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-700">
                  Products expired prior to or on delivery date
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h3 className="flex items-center gap-3 font-semibold text-lg text-gray-800 mb-4">
              <FaTimesCircle className="text-red-600" /> Non-Eligible Items
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-red-100 text-red-800 rounded-full w-5 h-5 mr-3 mt-0.5 flex-shrink-0">
                  ✗
                </span>
                <span className="text-gray-700">
                  Products with partial consumption or missing quantity
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-red-100 text-red-800 rounded-full w-5 h-5 mr-3 mt-0.5 flex-shrink-0">
                  ✗
                </span>
                <span className="text-gray-700">
                  Fresh produce accepted during delivery inspection
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-red-100 text-red-800 rounded-full w-5 h-5 mr-3 mt-0.5 flex-shrink-0">
                  ✗
                </span>
                <span className="text-gray-700">
                  Perishable items showing signs of improper storage
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-red-100 text-red-800 rounded-full w-5 h-5 mr-3 mt-0.5 flex-shrink-0">
                  ✗
                </span>
                <span className="text-gray-700">
                  Products damaged due to customer mishandling
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-gray-800">
          <FaMoneyBillWave className="text-primary-dull" /> Refund Process
        </h2>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block bg-blue-100 text-primary p-1 rounded-full mr-3 mt-0.5">
                <FaInfoCircle className="text-sm" />
              </span>
              <div>
                <strong className="text-gray-800">Processing Time:</strong>
                <span className="text-gray-700">
                  {" "}
                  Approved refunds are processed within{" "}
                  <strong>2–5 business days</strong>
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-blue-100 text-primary p-1 rounded-full mr-3 mt-0.5">
                <FaInfoCircle className="text-sm" />
              </span>
              <div>
                <strong className="text-gray-800">Refund Method:</strong>
                <span className="text-gray-700">
                  {" "}
                  Amount will be credited to your original payment method or
                  Sabziko wallet
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-blue-100 text-primary p-1 rounded-full mr-3 mt-0.5">
                <FaInfoCircle className="text-sm" />
              </span>
              <div>
                <strong className="text-gray-800">
                  Cash on Delivery (COD):
                </strong>
                <span className="text-gray-700">
                  {" "}
                  Refunds will be processed via UPI transfer or store credits
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Replacement */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-gray-800">
          <FaSyncAlt className="text-primary-dull" /> Product Replacement
        </h2>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <p className="text-gray-700 mb-3">
            For eligible items, you may request a replacement instead of a
            refund during the return process.
          </p>
          <ul className="space-y-2 pl-1 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Replacements are subject to product availability</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                Common replacement items include dairy products, bread, and
                packaged foods
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>
                Replacement delivery will be scheduled within 1-2 business days
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Return Procedure */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-5 text-gray-800">
          <FaUndoAlt className="text-primary-dull" /> Return Procedure
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-0.5 bg-blue-100"></div>
            <ol className="space-y-8">
              {[
                {
                  title: "Initiate Return Request",
                  content:
                    "Log in to your Sabziko account and navigate to 'Order History'. Select the relevant order and click 'Request Return'.",
                },
                {
                  title: "Select Items & Reason",
                  content:
                    "Choose the specific items for return and select the appropriate reason from the dropdown menu.",
                },
                {
                  title: "Upload Supporting Evidence",
                  content:
                    "Provide clear photographs showing the product condition, expiry date (if applicable), and any visible defects.",
                },
                {
                  title: "Review & Submit",
                  content:
                    "Verify all details and submit your request. You'll receive a confirmation email with your return reference number.",
                },
                {
                  title: "Return Authorization",
                  content:
                    "Our team will review your request within 24 hours. Approved returns will receive pickup instructions if required.",
                },
              ].map((step, index) => (
                <li key={index} className="relative pl-10">
                  <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white font-medium">
                    {index + 1}
                  </div>
                  <h3 className="font-medium text-gray-800 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.content}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Refund Tracker */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-gray-800">
          <FaSyncAlt className="text-primary-dull" /> Refund Status Tracking
        </h2>
        <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3">
            <div className="flex items-center mb-2 sm:mb-0">
              <span className="bg-yellow-100 text-yellow-800 p-1 rounded-full mr-3">
                <FaInfoCircle />
              </span>
              <strong className="text-gray-800">
                Standard Refund Workflow:
              </strong>
            </div>
            <div className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              Requested → Under Review → Approved → Refunded
            </div>
          </div>
          <p className="text-gray-700">
            You can monitor your refund status in real-time through the "Orders"
            section of your account. Email notifications will be sent at each
            status update.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-gray-800">
          <FaQuestionCircle className="text-primary-dull" /> Customer Support
        </h2>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <p className="text-gray-700 mb-4">
            Our customer service team is available to assist you with any
            questions regarding returns or refunds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <FaPhone className="text-primary-dull mr-2" />
                <h3 className="font-medium">Phone Support</h3>
              </div>
              <a
                href="tel:+919999999999"
                className="text-primary hover:text-primary-dull block"
              >
                +91 99999 99999
              </a>
              <p className="text-sm text-gray-600 mt-1">Mon-Sun, 8AM-8PM</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <FaWhatsapp className="text-primary-dull mr-2" />
                <h3 className="font-medium">WhatsApp</h3>
              </div>
              <a
                href="https://wa.me/919999999999"
                className="text-primary hover:text-primary-dull block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with Us
              </a>
              <p className="text-sm text-gray-600 mt-1">24/7 Support</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-primary-dull mr-2" />
                <h3 className="font-medium">Email</h3>
              </div>
              <a
                href="mailto:support@sabziko.in"
                className="text-primary hover:text-primary-dull block"
              >
                support@sabziko.in
              </a>
              <p className="text-sm text-gray-600 mt-1">
                Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gray-100 p-5 rounded-lg">
        <div className="flex items-start">
          <span className="text-yellow-600 mr-3 mt-0.5">
            <FaInfoCircle />
          </span>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              Policy Disclaimer
            </h3>
            <p className="text-sm text-gray-700">
              All return requests are subject to inspection and approval by our
              quality team. Sabziko reserves the right to decline returns that
              do not meet our policy conditions. For exceptional circumstances,
              please contact our customer support team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnRefundPage;
