import React from "react";
import { FaGift, FaCalendarAlt, FaEnvelope, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Gift {
  eventName: string;
  eventId: number;
  date: string;
  contributorName: string;
  contributorEmail: string;
  amount: number;
}

interface GiftHistoryCardProps {
  gift: Gift;
  showContributerDetails?: boolean;
  onCotributeClick?: (eventId: number) => void;
}

const Giftcard: React.FC<GiftHistoryCardProps> = ({
  gift,
  showContributerDetails = true,
  onCotributeClick,
}) => {
  const navigate = useNavigate();
  return (
    <div className="w-full border bg-white shadow-lg rounded-xl p-6  hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center">
        {/* Gift Icon */}
        <FaGift className="h-10 w-10 text-indigo-600 mr-4" />
        <div>
          <h2 className="text-xl w-72 break-all font-semibold text-gray-800">
            {gift.eventName + ""}
          </h2>
          <div className="flex items-center text-gray-600 space-x-2">
            <FaCalendarAlt className="h-5 w-5" />
            <span>{gift.date}</span>
          </div>
        </div>
      </div>
      {/* Contributor Info */}
      {showContributerDetails && (
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
      )}
      {/* Gift Amount */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-lg font-medium text-gray-800">Gift Amount:</span>
        <span className="text-xl font-bold text-indigo-600">
          ${gift.amount}
        </span>
      </div>
      {!showContributerDetails && (
        <div className="mt-4 flex gap-4">
          <button
            onClick={() => navigate(`/event/${gift.eventId}`)}
            className={`flex-1 bg-blue-400  text-white py-2 px-2 rounded-lg hover:bg-blue-500 transition-colors duration-300`}
          >
            Go to Event
          </button>

          <button
            onClick={() => onCotributeClick?.(gift.eventId)}
            className="flex-1 bg-gray-100 text-indigo-600 py-2 px-2 rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Contribute Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Giftcard;
