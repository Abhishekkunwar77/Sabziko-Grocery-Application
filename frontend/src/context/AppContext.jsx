import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);

  // 🧠 Hydrate cart from localStorage first
  const [cartItems, setCartItems] = useState(() => {
    try {
      const local = localStorage.getItem("cartItems");
      return local ? JSON.parse(local) : {};
    } catch {
      return {};
    }
  });

  const [searchQuery, setSearchQuery] = useState({});

  // 🚀 Fetch seller status
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      setIsSeller(data.success);
    } catch {
      setIsSeller(false);
    }
  };

  // 👤 Fetch user and merge carts
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/is-auth");
      if (data.success) {
        setUser(data.user);

        // 🧪 Merge local cart with backend cart
        const localCart = JSON.parse(localStorage.getItem("cartItems")) || {};
        const mergedCart = { ...localCart, ...data.user.cartItems };

        setCartItems(mergedCart);
      }
    } catch {
      setUser(null);
    }
  };

  // 📦 Fetch all products
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // 🛒 Cart operations
  const addToCart = (itemId) => {
    const updatedCart = { ...cartItems };
    updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
    setCartItems(updatedCart);
    toast.success("Added to cart");
  };

  const updateCartItem = (itemId, quantity) => {
    const updatedCart = { ...cartItems };
    updatedCart[itemId] = quantity;
    setCartItems(updatedCart);
    toast.success("Cart updated");
  };

  const removeFromCart = (itemId) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[itemId]) {
      updatedCart[itemId] -= 1;
      if (updatedCart[itemId] === 0) {
        delete updatedCart[itemId];
      }
    }
    setCartItems(updatedCart);
    toast.success("Removed from cart");
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((acc, val) => acc + val, 0);
  };

  const getCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [id, qty]) => {
      const product = products.find((p) => p._id === id);
      return product ? total + product.offerPrice * qty : total;
    }, 0);
  };

  // 🔁 Sync cart with backend (if logged in)
  useEffect(() => {
    const updateCartInDB = async () => {
      try {
        const { data } = await axios.post("/api/cart/update", { cartItems });
        if (!data.success) {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    if (user) {
      updateCartInDB();
    }
  }, [cartItems]);

  // 💾 Always save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (e) {
      console.error("Cart saving failed:", e);
    }
  }, [cartItems]);

  // 🌱 Initial fetches
  useEffect(() => {
    fetchUser();
    fetchSeller();
    fetchProducts();
  }, []);

  

  const value = {
    navigate,
    user,
    isSeller,
    showUserLogin,
    setUser,
    setIsSeller,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartItems,
    searchQuery,
    setSearchQuery,
    getCartAmount,
    getCartCount,
    axios,
    fetchProducts,
    setCartItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default useAppContext;
