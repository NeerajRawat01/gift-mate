import React from "react";
import { FaGift, FaCalendarAlt, FaEnvelope, FaUser } from "react-icons/fa";

interface Gift {
  eventName: string;
  date: string;
  contributorName: string;
  contributorEmail: string;
  amount: number;
}

interface GiftHistoryCardProps {
  gift: Gift;
}

const Giftcard: React.FC<GiftHistoryCardProps> = ({ gift }) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 mb-4 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center">
        {/* Gift Icon */}
        <FaGift className="h-10 w-10 text-indigo-600 mr-4" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {gift.eventName}
          </h2>
          <div className="flex items-center text-gray-600 space-x-2">
            <FaCalendarAlt className="h-5 w-5" />
            <span>{gift.date}</span>
          </div>
        </div>
      </div>

      {/* Contributor Info */}
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-700">
          Contributor Details
        </h3>
        <div className="mt-2 text-gray-600 space-y-1">
          <div className="flex items-center space-x-2">
            <FaUser className="h-5 w-5" />
            <span>{gift.contributorName}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="h-5 w-5" />
            <span>{gift.contributorEmail}</span>
          </div>
        </div>
      </div>

      {/* Gift Amount */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-lg font-medium text-gray-800">Gift Amount:</span>
        <span className="text-xl font-bold text-indigo-600">
          ${gift.amount}
        </span>
      </div>
    </div>
  );
};

export default Giftcard;
