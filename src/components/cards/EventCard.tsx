import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePushPin } from "react-icons/md";

interface Props {
  event: {
    id: number;
    name: string;
    date: string;
    venue: string;
    description: string;
    imageUrl: string;
  };
}

const EventCard: React.FC<Props> = ({ event }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mb-4 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col">
        {/* Event Image */}
        <img
          className="w-full h-40 object-cover rounded-lg"
          src={"https://via.placeholder.com/400x200.png?text=Event+Image"}
          alt={event.name}
        />

        {/* event Name */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          {event.name}
        </h2>

        {/* event Date and Venue */}
        <div className="mt-2 text-gray-600 flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaRegCalendarAlt className="h-5 w-5 text-indigo-600" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MdOutlinePushPin className="h-5 w-5 text-indigo-600" />
            <span>{event.venue}</span>
          </div>
        </div>

        {/* Props Description */}
        <p className="mt-4 text-gray-600">{event.description}</p>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
            View Details
          </button>
          <button className="flex-1 bg-gray-100 text-indigo-600 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300">
            Contribute
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
