import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import AllProducts from "./pages/AllProducts";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AddAddress from "./pages/AddAddress";
import MyOrders from "./pages/MyOrders";
import SellerLogin from "./components/seller/SellerLogin";
import Sellerlayout from "./pages/seller/SellerLayout";
import AddProduct from "./pages/seller/AddProduct";
import ProductList from "./pages/seller/ProductList";
import Orders from "./pages/seller/Orders";
import Loading from "./components/Loading";
import EmailList from "./components/seller/EmailList";
import SellerContact from "./pages/seller/SellerContact";
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import About from "./components/About"
import BlogList from './components/Blog/BlogList';
import BlogDetails from './components/Blog/BlogDetails';
import BlogForm from './components/Blog/BlogForm';
import ReturnRefundPage from './components/ReturnRefundPage ';
const App = () => {
  const location = useLocation();
  const isSellerpath = location.pathname.includes("seller");
  const { showUserLogin, isSeller } = useAppContext();

  useEffect(() => {
    document.title = isSellerpath
      ? "Sabziko - Seller"
      : "Sabziko | Fresh. Fast. Farm to Cart.";
  }, [location.pathname]); // Re-run effect when pathname changes

  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {isSellerpath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}
      <Toaster />
      <div
        className={`${isSellerpath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/loader" element={<Loading />} />
          <Route
            path="/seller"
            element={isSeller ? <Sellerlayout /> : <SellerLogin />}
          >
            <Route index element={isSeller ? <AddProduct /> : null} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="orders" element={<Orders />} />
            <Route path="subscribers" element={<EmailList />} />
            <Route path="contact" element={<SellerContact />} />
            <Route path="/seller/blogs/new" element={<BlogForm />} />
          </Route>
          <Route path="faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/return-refund" element={<ReturnRefundPage />} />
        </Routes>
      </div>
      {!isSellerpath && <Footer />}
    </div>
  );
};

export default App;
