import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateEventModal from "../../modal/CreateEventModal";
import InviteContributerModal from "../../modal/InviteContributerModal";
import { EventActionType } from "../../store/actions/actions.constants";
import { allEvents, eventsLoading } from "../../store/selectors/event.selector";
import EventCard from "../cards/EventCard";
import Spinner from "../Spinner";

const MyEvents: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: EventActionType.FETCH_EVENTS,
    });
  }, []);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [eventId, setEventId] = useState<number>();

  const eventsData = useSelector(allEvents);
  const loading = useSelector(eventsLoading);

  return (
    <div className="px-16 py-5">
      {/* Title and Create Event Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-center  text-indigo-600">
          My Events
        </h1>

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
