import React from "react";
import Modal from "./Modal";

interface Props {
  title: string;
  visible: boolean;
  onConfirm: () => void;
  handleVisibility: (value: boolean) => void | undefined;
}

const ConfirmModal: React.FC<Props> = ({
  handleVisibility,
  visible,
  title,
  onConfirm,
}) => {
  return (
    <Modal
      title={''}
      visible={visible}
      onClose={() => handleVisibility(false)}
    >
      <div className="px-6 py-4">
        {/* Modal Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>

        {/* Modal Description */}
        <p className="text-gray-600 mb-6">
          Are you sure you want to proceed with this action? This cannot be
          undone.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          {/* Cancel Button - Subtle styling */}
          <button
            onClick={() => handleVisibility(false)}
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
          >
            Cancel
          </button>

          {/* Confirm Button - Prominent styling */}
          <button
            className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
