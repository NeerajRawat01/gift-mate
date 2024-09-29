import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateEventModal from "../../modal/CreateEventModal";
import { Movie } from "../../models/movie";
import EventCard from "../cards/EventCard";

interface Props {
  cardData?: Movie;
}

const MyEvents: React.FC<Props> = ({ cardData }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const events = [
    {
      id: 1,
      name: "Annual Charity Gala",
      date: "12th December 2024",
      venue: "Hilton Downtown",
      description:
        "Join us for an evening of entertainment, food, and fundraising.",
      imageUrl: "https://via.placeholder.com/400x200.png?text=Event+Image",
    },
    {
      id: 2,
      name: "Tech Conference 2024",
      date: "25th November 2024",
      venue: "San Francisco Convention Center",
      description:
        "A conference to showcase the latest in technology and innovation.",
      imageUrl: "https://via.placeholder.com/400x200.png?text=Event+Image",
      contributorName: "Jane Smith",
      contributorEmail: "janesmith@example.com",
      amount: 150,
    },
    {
      id: 3,
      name: "Annual Charity Gala",
      date: "12th December 2024",
      venue: "Hilton Downtown",
      description:
        "Join us for an evening of entertainment, food, and fundraising.",
      imageUrl: "https://via.placeholder.com/400x200.png?text=Event+Image",
      contributer: {
        contributorName: "Jane Smith",
        contributorEmail: "janesmith@example.com",
        amount: 150,
      },
    },
    {
      id: 4,
      name: "Tech Conference 2024",
      date: "25th November 2024",
      venue: "San Francisco Convention Center",
      description:
        "A conference to showcase the latest in technology and innovation.",
      imageUrl: "https://via.placeholder.com/400x200.png?text=Event+Image",
    },
  ];

  return (
    <div className="p-10">
      {/* Title and Create Event Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My Events</h1>
        <button
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          onClick={() => setShowModal(true)}
        >
          Create Event
        </button>
      </div>

      {/* Description or Additional Info */}
      <p className="text-gray-600 mb-4">
        Here are your upcoming events. You can create new events using the
        button above.
      </p>

      {/* Event Cards */}
      <div className="gap-8 max-h-[calc(100vh-12rem)] scrollbar overflow-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {events.map((event, index) => (
          <EventCard forMyEvents key={index} event={event} />
        ))}
      </div>

      {/* Create Event Modal */}
      <CreateEventModal
        visible={showModal}
        handleVisibility={setShowModal} // Use setShowModal to control modal visibility
      />
    </div>
  );
};

export default MyEvents;
