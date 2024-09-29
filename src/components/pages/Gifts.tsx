import { useNavigate } from "react-router-dom";
import { Movie } from "../../models/movie";
import Giftcard from "../cards/Giftcard";

interface Props {
  cardData?: Movie;
}

const Gifts: React.FC<Props> = ({ cardData }) => {
  const navigate = useNavigate();

  const gifts = [
    {
      id: 1,
      eventName: "Wedding Celebration",
      date: "15th September 2024",
      contributorName: "John Doe",
      contributorEmail: "johndoe@example.com",
      amount: 200,
    },
    {
      id: 2,
      eventName: "Baby Shower",
      date: "10th October 2024",
      contributorName: "Jane Smith",
      contributorEmail: "janesmith@example.com",
      amount: 150,
    },
    {
      id: 3,
      eventName: "Wedding Celebration",
      date: "15th September 2024",
      contributorName: "John Doe",
      contributorEmail: "johndoe@example.com",
      amount: 200,
    },
    {
      id: 4,
      eventName: "Baby Shower",
      date: "10th October 2024",
      contributorName: "Jane Smith",
      contributorEmail: "janesmith@example.com",
      amount: 150,
    },
    {
      id: 3,
      eventName: "Wedding Celebration",
      date: "15th September 2024",
      contributorName: "John Doe",
      contributorEmail: "johndoe@example.com",
      amount: 200,
    },
    {
      id: 4,
      eventName: "Baby Shower",
      date: "10th October 2024",
      contributorName: "Jane Smith",
      contributorEmail: "janesmith@example.com",
      amount: 150,
    },
    {
      id: 3,
      eventName: "Wedding Celebration",
      date: "15th September 2024",
      contributorName: "John Doe",
      contributorEmail: "johndoe@example.com",
      amount: 200,
    },
    {
      id: 4,
      eventName: "Baby Shower",
      date: "10th October 2024",
      contributorName: "Jane Smith",
      contributorEmail: "janesmith@example.com",
      amount: 150,
    },
    {
      id: 3,
      eventName: "Wedding Celebration",
      date: "15th September 2024",
      contributorName: "John Doe",
      contributorEmail: "johndoe@example.com",
      amount: 200,
    },
    {
      id: 4,
      eventName: "Baby Shower",
      date: "10th October 2024",
      contributorName: "Jane Smith",
      contributorEmail: "janesmith@example.com",
      amount: 150,
    },
  ];
  return (
    <div className="p-10 gap-8 grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-">
      {gifts.map((gift, index) => (
        <Giftcard key={index} gift={gift} />
      ))}
    </div>
  );
};

export default Gifts;
