import { useState } from "react";
import { FaGift, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEventAvailable } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Start with the sidebar closed on mobile

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarItems = [
    { name: "My Events", icon: <MdEventAvailable className="text-3xl" /> },
    { name: "Gifts", icon: <FaGift className="text-2xl" /> },
    { name: "Profile", icon: <FaUser className="text-2xl" /> },
  ];

  return (
    <div className="flex h-screen fixed">
      {/* Sidebar */}
      <div
        className={`bg-cyan-700 text-white w-64 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <div
          className={`flex items-center justify-between p-2 border-b border-gray-700`}
        >
          <h1 className="text-xl font-extrabold mb-5 text-center t tracking-wider drop-shadow-lg">
            Gift <span className="text-pink-600">Mate</span>
          </h1>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className="flex gap-4 items-center hover:bg-gray-700 p-2 rounded"
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
        className={`md:hidden flex items-center justify-between ${
          !isOpen ? "border shadow-md" : ""
        }  p-2 fixed top-0 w-full z-10`}
      >
        <h1
          className={`text-xl font-extrabold mb-5 text-center ${
            !isOpen ? "text-black" : "text-white"
          } tracking-wider drop-shadow-lg`}
        >
          Gift <span className="text-pink-600">Mate</span>
        </h1>
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
