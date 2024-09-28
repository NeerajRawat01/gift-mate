import { Transition } from "@headlessui/react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex gap-10 justify-between md:justify-start h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-extrabold text-center text-indigo-700 tracking-wider drop-shadow-lg">
              Gift <span className="text-pink-600">Mate</span>
            </h1>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-700 focus:outline-none"
            >
              {isOpen ? (
                <RxCross1 className="block h-6 w-6" />
              ) : (
                <GiHamburgerMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sidebar) */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="md:hidden fixed inset-0 bg-white z-50 w-64 h-screen shadow-md">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-extrabold text-center text-indigo-700 tracking-wider drop-shadow-lg">
              Gift <span className="text-pink-600">Mate</span>
            </h1>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              <FaUser className="block h-6 w-6" />
            </button>
          </div>
          <div className="mt-4 space-y-4 px-4">
            <a href="#" className="block text-gray-600 hover:text-indigo-600">
              Home
            </a>
            <a href="#" className="block text-gray-600 hover:text-indigo-600">
              About
            </a>
            <a href="#" className="block text-gray-600 hover:text-indigo-600">
              Features
            </a>
            <a href="#" className="block text-gray-600 hover:text-indigo-600">
              Contact
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
