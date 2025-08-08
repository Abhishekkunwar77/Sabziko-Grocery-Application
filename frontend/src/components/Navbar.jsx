  import React, { useEffect, useState } from "react";
  import assets from "../assets/assets.js";
  import { NavLink } from "react-router-dom";
  import { useAppContext } from "../context/AppContext";
  import toast from "react-hot-toast";

  const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    const {
      user,
      setUser,
      setShowUserLogin,
      navigate,
      searchQuery,
      setSearchQuery,
      getCartCount,
      axios,
    } = useAppContext();

    const logout = async () => {
      try {
        const { data } = await axios.get("/api/user/logout");
        if (data.success) {
          toast.success(data.message);
          setUser(null);
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    useEffect(() => {
      if (searchQuery.length > 0) {
        navigate("/products");
      }
    }, [searchQuery]);

    return (
      <div>
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
          <NavLink to="/" onClick={() => setOpen(false)}>
            <img className="h-15" src={assets.logo} alt="dummyLogoColored" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">All Product</NavLink>
            <NavLink to="/">Contact</NavLink>

            <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                type="text"
                placeholder="Search products"
              />
              <img src={assets.search_icon} alt="search" className="w-4 h-4" />
            </div>

            <div
              onClick={() => navigate("/cart")}
              className="relative cursor-pointer"
            >
              <img
                src={assets.nav_cart_icon}
                alt="cart"
                className="w-6 opacity-80"
              />
              <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
                {getCartCount()}
              </button>
            </div>

            {!user ? (
              <button
                onClick={() => setShowUserLogin(true)}
                className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
              >
                Login
              </button>
            ) : (
              <div className="relative group">
                <img
                  src={assets.profile_icon}
                  alt="profileImage"
                  className="w-10"
                />
                <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
                  <li
                    onClick={() => navigate("/my-orders")}
                    className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
                  >
                    My Orders
                  </li>
                  <li
                    onClick={logout}
                    className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center gap-6 sm:hidden">
            <div
              onClick={() => navigate("/cart")}
              className="relative cursor-pointer"
            >
              <img
                src={assets.nav_cart_icon}
                alt="cart"
                className="w-6 opacity-80"
              />
              <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
                {getCartCount()}
              </button>
            </div>
            <button
              onClick={() => (open ? setOpen(false) : setOpen(true))}
              aria-label="Menu"
            >
              <img src={assets.menu_icon} alt="menu" />
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div
              className={`${
                open ? "flex" : "hidden"
              } absolute top-[90px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-50`}
            >
              <NavLink to="/" onClick={() => setOpen(false)}>
                Home
              </NavLink>
              <NavLink
                to="/products"
                onClick={() => setOpen(false)}
                className="block"
              >
                All Products
              </NavLink>

              {user && (
                <NavLink
                  to="/orders"
                  onClick={() => setOpen(false)}
                  className="block"
                >
                  My Orders
                </NavLink>
              )}

              {!user ? (
                <button
                  onClick={() => {
                    setOpen(false);
                    setShowUserLogin(true);
                  }}
                  className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={logout}
                  className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </nav>

        {/* Promotional Banner */}
        {showBanner && (
          <div className="w-full flex items-center justify-between px-4 md:px-14 py-1 font-medium text-sm text-white text-center bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dull)]">
            <p>Get 20% OFF on Your First Order!</p>
            <div className="flex items-center space-x-6">
              <button
                type="button"
                onClick={() => navigate("/products")}
                className="cursor-pointer font-normal text-gray-800 bg-white px-7 py-2 rounded-full hover:bg-green-100"
              >
                Claim Offer
              </button>
              <button
                className="cursor-pointer"
                type="button"
                onClick={() => setShowBanner(false)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="12.532"
                    width="17.498"
                    height="2.1"
                    rx="1.05"
                    transform="rotate(-45.74 0 12.532)"
                    fill="#fff"
                  />
                  <rect
                    x="12.533"
                    y="13.915"
                    width="17.498"
                    height="2.1"
                    rx="1.05"
                    transform="rotate(-135.74 12.533 13.915)"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default Navbar;
