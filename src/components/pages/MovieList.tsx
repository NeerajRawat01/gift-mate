import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { Movie } from "../../models/movie";
import { useNavigate } from "react-router-dom";
import EventCard from "../cards/EventCard";
import Giftcard from "../cards/Giftcard";

interface Props {
  cardData?: Movie;
}

const MovieList: React.FC<Props> = ({ cardData }) => {
  const navigate = useNavigate();
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
    },
  ];

  const gifts = [
    {
      eventName: "Wedding Celebration",
      date: "15th September 2024",
      contributorName: "John Doe",
      contributorEmail: "johndoe@example.com",
      amount: 200,
    },
    {
      eventName: "Baby Shower",
      date: "10th October 2024",
      contributorName: "Jane Smith",
      contributorEmail: "janesmith@example.com",
      amount: 150,
    },
  ];

  return (
    <div className="p-6 space-y-4">
      {gifts.map((gift, index) => (
        <Giftcard key={index} gift={gift} />
      ))}
    </div>
  );
};

export default MovieList;
