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
  forMyEvents?: boolean;
}

const EventCard: React.FC<Props> = ({ event, forMyEvents }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-xl p-6 mb-4 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Event Image */}
          <img
            className="w-full h-40 object-cover rounded-lg"
            src={"https://via.placeholder.com/400x200.png?text=Event+Image"}
            alt={event.name}
          />

          {/* Event Name */}
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            {event.name}
          </h2>

          {/* Event Date and Venue */}
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

          {/* Event Description */}
          <p className="mt-4 text-gray-600">{event.description}</p>
        </div>

        {/* Delete and Invite Contributor Buttons (Side by Side) */}
        {forMyEvents && (
          <div className="mt-6 flex gap-4">
            <button className="flex-1 bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors duration-300">
              Invite Contributor
            </button>
            <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300">
              Delete
            </button>
          </div>
        )}

        <div className="mt-4 flex gap-4">
          <button
            className={`${
              forMyEvents ? "w-full" : "flex-1"
            }  bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300`}
          >
            View Details
          </button>
          {!forMyEvents && (
            <button className="flex-1 bg-gray-100 text-indigo-600 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300">
              Contribute
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
