import { useState } from "react";
import { FaGift } from "react-icons/fa";
import { FcInvite } from "react-icons/fc";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdHome } from "react-icons/io";
import { MdEventAvailable } from "react-icons/md";
import { RiMenuUnfold3Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ConfirmModal from "../modal/ConfirmModal";
import { localStorageService } from "../services/localStorageServices";
import { getUserData } from "../store/selectors/user.selector";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Start with the sidebar closed on mobile
  const navigate = useNavigate();
  const location = window.location.pathname;
  const userData = useSelector(getUserData);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
      icon: <FcInvite className="text-2xl" />,
      path: "/invitations",
    },
  ];

  const handleLogout = () => {
    localStorageService.removeAuthToken();
    setShowLogoutModal(false);
    navigate("/auth");
    toast.success("Logged out successfully");
    window.location.reload();
  };

  return (
    <div className="flex h-screen fixed">
      <div
        className={`bg-cyan-700 text-white w-64 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        {/* Sidebar Header */}
        <div
          className={`flex items-center py-[2.1rem] justify-between p-2 border-b border-gray-500`}
        >
          <h1 className="text-2xl font-extrabold text-center mx-8 tracking-wider drop-shadow-lg">
            Gift <span className="text-pink-600">Mate</span>
          </h1>
          <button
            onClick={toggleSidebar}
            className="text-gray-300 hover:text-white"
          >
            {isOpen && (
              <RiMenuUnfold4Fill
                className="text-black md:hidden hover:bg-gray-200 z-20"
                size={30}
              />
            )}
          </button>
        </div>

        {/* Sidebar Items */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col p-4">
            <ul className="space-y-1">
              {sidebarItems.map((item, index) => (
                <li
                  onClick={() => {
                    navigate(item.path);
                    toggleSidebar();
                  }}
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

          {/* User Profile and Logout */}
          <div className="p-4  border-t mb-24 border-gray-500">
            {/* Hardcoded user details */}
            <div className="flex items-center gap-3 mb-2">
              <HiOutlineUserCircle size={35} className="text-white" />
              <div className="flex-1">
                <p className="font-semibold">{userData?.name}</p>
                <p className="text-sm text-gray-300">{userData?.email}</p>
              </div>
            </div>
            <button
              onClick={() => setShowLogoutModal(true)}
              className="w-full py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Bar */}
      <div
        className={`md:hidden flex items-center p-2 fixed top-0 w-full z-10`}
      >
        <button
          onClick={toggleSidebar}
          className="text-gray-300 hover:text-white"
        >
          {!isOpen && (
            <RiMenuUnfold3Fill
              className="text-black hover:bg-gray-200 z-20"
              size={30}
            />
          )}
        </button>
      </div>
      <ConfirmModal
        title="Are you sure you want to logout?"
        visible={showLogoutModal}
        onConfirm={handleLogout}
        handleVisibility={setShowLogoutModal}
      />
    </div>
  );
};

export default Sidebar;
