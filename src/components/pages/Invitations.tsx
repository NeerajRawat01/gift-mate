import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateContributionModal from "../../modal/CreateContributionModal";
import { InvitationActionType } from "../../store/actions/actions.constants";
import {
  allInvitations,
  invitationLoading,
} from "../../store/selectors/invitation.selector";
import EventCard from "../cards/EventCard";
import Spinner from "../Spinner";

const Invitations: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: InvitationActionType.FETCH_INVITATION,
    });
  }, []);

  const [showContributionModal, setShowContributionModal] = useState(false);
  const [hostMessage, setHostMessage] = useState("");
  const [eventId, setEventId] = useState<number>();

  const invitations = useSelector(allInvitations);
  const loading = useSelector(invitationLoading);

  return (
    <div className="px-16 py-5">
      {/* Title and Info */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-center  text-indigo-600">
          Invitations
        </h1>
      </div>

      {/* Description or Additional Info */}
      <p className="text-gray-600 mb-4">
        These are your invitations. You can view details and manage your
        contributions.
      </p>

      {/* Event Cards */}
      <div className="gap-10 p-2 max-h-[calc(100vh-12rem)] scrollbar overflow-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {loading ? (
          <Spinner />
        ) : (
          invitations.map((invitation) => (
            <EventCard
              onCotributeClick={(event_id) => {
                setEventId(event_id);
                setShowContributionModal(true);
                setHostMessage(invitation.message);
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

      <CreateContributionModal
        event_id={eventId!}
        visible={showContributionModal}
        handleVisibility={setShowContributionModal}
        hostMessage={hostMessage}
      />
    </div>
  );
};

export default Invitations;
