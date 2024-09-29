import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { Fragment } from "react";

interface MyModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string; // Add a className prop for customization
}

const MyModal: React.FC<MyModalProps> = ({
  visible,
  onClose,
  title,
  children,
  className,
}) => {
  return (
    <>
      <Transition appear show={visible} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-auto max-w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ${className}`}
                >
                  <div className="flex justify-between items-start">
                    {title && (
                      <Dialog.Title
                        as="h3"
                        className="text-lg  leading-6text-2xl font-bold text-gray-800"
                      >
                        {title}
                      </Dialog.Title>
                    )}
                    <button
                      onClick={onClose}
                      className="ml-auto text-gray-500 hover:text-gray-700"
                    >
                      <RxCross2 className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-2">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MyModal;
