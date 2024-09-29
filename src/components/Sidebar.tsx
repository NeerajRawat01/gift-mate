import { useState } from "react";
import { FaGift } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { MdEventAvailable } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Start with the sidebar closed on mobile

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const location = window.location.pathname;

  const sidebarItems = [
    { name: "Home", icon: <IoMdHome className="text-2xl" />, path: "/" },
    {
      name: "My Events",
      icon: <MdEventAvailable className="text-2xl" />,
      path: "/my-events",
    },
    { name: "Gifts", icon: <FaGift className="text-2xl" />, path: "/gifts" },
    {
      name: "Invitations",
      icon: <MdEventAvailable className="text-2xl" />,
      path: "/invitations",
    },
  ];

  return (
    <div className="flex h-screen fixed">
      {/* <header className="w-full fixed top-0 py-3 bg-indigo-600 text-white text-center">
        <h1 className="text-4xl font-extrabold">Gift Mate</h1>
        <p className="mt-2 text-lg">Manage your event gifts seamlessly</p>
      </header> */}
      {/* Sidebar */}
      <div
        className={`bg-cyan-700 text-white w-64 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <div
          className={`flex items-center py-[2.1rem] justify-between p-2 border-b border-gray-500`}
        >
          <h1 className="text-2xl font-extrabold  text-center mx-8 tracking-wider drop-shadow-lg">
            Gift <span className="text-pink-600">Mate</span>
          </h1>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li
                onClick={() => navigate(item.path)}
                key={index}
                className={`flex gap-3 cursor-pointer hover:bg-gray-700 p-2 rounded ${
                  location === item.path ? "bg-gray-700" : ""
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Bar */}
      <div
        className={`md:hidden  flex items-center justify-end  p-2 fixed top-0 w-full z-10`}
      >
        {/* <h1
          className={`text-xl font-extrabold mb-5 text-center ${
            !isOpen ? "text-black" : "text-white"
          } tracking-wider drop-shadow-lg`}
        >
          Gift <span className="text-pink-600">Mate</span>
        </h1> */}
        <button
          onClick={toggleSidebar}
          className="text-gray-300 hover:text-white"
        >
          {isOpen ? (
            <RxCross1 className="text-cyan-800" size={30} />
          ) : (
            <GiHamburgerMenu className="text-cyan-800" size={30} />
          )}
        </button>
      </div>

      {/* Overlay (for mobile view) */}
      {/* <div
        className={`bg-blac opacity-50 fixed inset-0 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-50"
            : "pointer-events-none opacity-0"
        } md:hidden`}
        onClick={toggleSidebar}
      ></div> */}
    </div>
  );
};

export default Sidebar;
