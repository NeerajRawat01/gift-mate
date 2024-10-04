import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContributionActionType } from "../../store/actions/actions.constants";
import {
  allContributions,
  contributionLoading,
} from "../../store/selectors/contribution.selector";
import Giftcard from "../cards/Giftcard";
import Spinner from "../Spinner";
import { resetContributions } from "../../store/reducers/contribution.reducer";
import CreateContributionModal from "../../modal/CreateContributionModal";

const MyContribution: React.FC = () => {
  const dispatch = useDispatch();
  const [contributions, setContributions] = useState<any[]>([]);
  const myContributions = useSelector(allContributions);
  const loading = useSelector(contributionLoading);

  const [showContributionModal, setShowContributionModal] = useState(false);
  const [eventId, setEventId] = useState<number>();

  useEffect(() => {
    dispatch({
      type: ContributionActionType.FETCH_CONTRIBUTION,
      payload: "my_contributions",
    });
  }, [dispatch]);

  useEffect(() => {
    // This cleanup function will run on unmount
    return () => {
      dispatch(resetContributions());
    };
  }, [dispatch]);

  useEffect(() => {
    const transformedData = myContributions.reduce((acc, item) => {
      acc.push({
        id: item.id,
        eventName: item.event.name,
        eventId: item.event.id,
        date: new Date(item.event.date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        contributorName: item.contributer.name,
        contributorEmail: item.contributer.email,
        amount: item.amount,
      });
      return acc;
    }, []);

    setContributions(transformedData);
  }, [myContributions]);

  return (
    <div className="px-10 py-5">
      <h1 className="text-4xl font-bold  mb-4 text-indigo-600">
        My Contributions
      </h1>
      <p className="text-lg  mb-8 text-gray-600">
        Here you can find all the gifts you have contributed to various events.
        Each card displays the event details.
      </p>
      <div className="max-h-[calc(100vh-16rem)] overflow-auto scrollbar p-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
        {loading ? (
          <Spinner />
        ) : (
          contributions.map((gift) => (
            <Giftcard
              onCotributeClick={(event_id) => {
                setEventId(event_id);
                setShowContributionModal(true);
              }}
              showContributerDetails={false}
              key={gift.id}
              gift={gift}
            />
          ))
        )}
        {contributions.length === 0 && (
          <div className="text-center w-full text-indigo-600 text-3xl mt-5">
            <p>No Gifts found</p>
          </div>
        )}
      </div>
      <CreateContributionModal
        event_id={eventId!}
        visible={showContributionModal}
        handleVisibility={setShowContributionModal}
      />
    </div>
  );
};

export default MyContribution;
