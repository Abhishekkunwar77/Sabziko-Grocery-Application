import { Link, NavLink, Outlet } from "react-router-dom";
import assets from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Sellerlayout = () => {
  const { axios, navigate } = useAppContext();

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    {
      name: "Product List",
      path: "/seller/product-list",
      icon: assets.product_list_icon,
    },
    { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
    {
      name: "Subscribed Emails",
      path: "/seller/subscribers",
      icon: assets.email_icon,
    },
    {
      name: "Contact Messages",
      path: "/seller/contact",
      icon: assets.contact_message, // reuse or use a new one like assets.message_icon
    },
    {
      name: "Add Blog",
      path: "/seller/blogs/new",
      icon: assets.addBLog, // reuse or use a new one like assets.message_icon
    },
  ];
  

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/seller/logout");
      if (data.success) {
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white ">
        <Link to="/">
          <img
            src={assets.logo}
            alt="logo"
            className="cursor-pointer w-36 md:w-40"
          />
        </Link>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button
            onClick={logout}
            className="cursor-pointer border rounded-full text-sm px-4 py-1 hover:bg-primary-dull/25"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col ">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/seller"}
              className={({ isActive }) => `flex items-center py-3 px-4 gap-3 
      ${
        isActive
          ? "border-r-4 md:border-r-[6px] bg-primary-dull/25 border-primary-dull text-primary"
          : "hover:bg-gray-100/90 border-white"
      }`}
            >
              {({ isActive }) => (
                <>
                  <img
                    src={item.icon}
                    alt=""
                    className={`w-7 h-7 transition duration-200 ${
                      isActive
                        ? "filter invert sepia saturate-[100%] hue-rotate-[90deg] brightness-[1]"
                        : ""
                    }`}
                  />
                  <p className="md:block hidden text-center">{item.name}</p>
                </>
              )}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Sellerlayout;
