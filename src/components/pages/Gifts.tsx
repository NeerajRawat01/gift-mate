import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContributionActionType } from "../../store/actions/actions.constants";
import {
  allContributions,
  contributionLoading,
} from "../../store/selectors/contribution.selector";
import Giftcard from "../cards/Giftcard";
import Spinner from "../Spinner";

const Gifts: React.FC = () => {
  const dispatch = useDispatch();
  const [myGifts, setMyGifts] = useState<any[]>([]);
  const gifts = useSelector(allContributions);
  const loading = useSelector(contributionLoading);

  useEffect(() => {
    dispatch({
      type: ContributionActionType.FETCH_CONTRIBUTION,
    });
  }, [dispatch]);

  useEffect(() => {
    const transformedData = gifts.reduce((acc, item) => {
      acc.push({
        id: item.id,
        eventName: item.event.name,
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

    setMyGifts(transformedData);
  }, [gifts]);

  return (
    <div className="px-16 py-5">
      <h1 className="text-4xl font-bold  mb-4 text-indigo-600">
        My Received Gifts
      </h1>
      <p className="text-lg  mb-8 text-gray-600">
        Here you can find all the gifts you have received from various events.
        Each card displays the event details and the contributor's information.
      </p>
      <div className="max-h-[calc(100vh-12rem)] overflow-auto scrollbar p-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
        {loading ? (
          <Spinner />
        ) : (
          myGifts.map((gift) => <Giftcard key={gift.id} gift={gift} />)
        )}
        {myGifts.length === 0 && (
          <div className="text-center w-full text-indigo-600 text-3xl mt-5">
            <p>No Gifts found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gifts;
