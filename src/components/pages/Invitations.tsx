import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InviteContributerModal from "../../modal/InviteContributerModal";
import { invitationActionType } from "../../store/actions/actions.constants";
import {
  allInvitations,
  invitationLoading,
} from "../../store/selectors/invitation.selector";
import EventCard from "../cards/EventCard";
import Spinner from "../Spinner";

const Invitations: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: invitationActionType.FETCH_INVITATION,
    });
  }, []);

  const [showInviteModal, setShowInviteModal] = useState(false);
  const [eventId, setEventId] = useState<number>();

  const invitations = useSelector(allInvitations);
  const loading = useSelector(invitationLoading);

  console.log("eventsData", loading, invitations);

  return (
    <div className="px-10 py-5">
      {/* Title and Info */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Invitations</h1>
        <p className="text-gray-600">
          These are your invitations. You can view details and manage your
          contributions.
        </p>
      </div>

      {/* Event Cards */}
      <div className="gap-10 p-2 max-h-[calc(100vh-10rem)] scrollbar overflow-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {loading ? (
          <Spinner />
        ) : (
          invitations.map((invitation) => (
            <EventCard
              onInviteClick={(event_id) => {
                setEventId(event_id);
                setShowInviteModal(true);
              }}
              key={invitation.id}
              event={invitation.event}
            />
          ))
        )}
      </div>
      {invitations.length === 0 && (
        <div className="text-center w-full text-indigo-600 text-3xl mt-5">
          <p>No Invitation found</p>
        </div>
      )}

      {/* Invite Contributer Modal */}
      <InviteContributerModal
        event_id={eventId!}
        visible={showInviteModal}
        handleVisibility={setShowInviteModal}
      />
    </div>
  );
};

export default Invitations;
