import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateEventModal from "../../modal/CreateEventModal";
import EventCard from "../cards/EventCard";
import { useDispatch, useSelector } from "react-redux";
import { eventActionType } from "../../store/actions/actions.constants";
import { allEvents, eventsLoading } from "../../store/selectors/event.selector";
import Spinner from "../Spinner";
import InviteContributerModal from "../../modal/InviteContributerModal";

const MyEvents: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: eventActionType.FETCH_EVENTS,
    });
  }, []);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [eventId, setEventId] = useState<number>();

  const eventsData = useSelector(allEvents);
  const loading = useSelector(eventsLoading);

  console.log("eventsData", loading, eventsData);
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
    },
  ];

  return (
    <div className="px-10 py-5">
      {/* Title and Create Event Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My Events</h1>
        <button
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          onClick={() => setShowCreateModal(true)}
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
      <div className="gap-10 p-2 max-h-[calc(100vh-12rem)] scrollbar overflow-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {loading ? (
          <Spinner />
        ) : (
          eventsData.map((event) => (
            <EventCard
              onInviteClick={(event_id) => {
                setEventId(event_id);
                setShowInviteModal(true);
              }}
              forMyEvents
              key={event.id}
              event={event}
            />
          ))
        )}
      </div>
      {eventsData.length === 0 && (
        <div className="text-center w-full text-indigo-600 text-3xl mt-5">
          <p>No Event found</p>
        </div>
      )}

      {/* Create Event Modal */}
      <CreateEventModal
        visible={showCreateModal}
        handleVisibility={setShowCreateModal}
      />

      {/* Invite Contributer Modal */}
      <InviteContributerModal
        event_id={eventId!}
        visible={showInviteModal}
        handleVisibility={setShowInviteModal}
      />
    </div>
  );
};

export default MyEvents;
