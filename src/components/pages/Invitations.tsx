import { useNavigate } from "react-router-dom";
import { Movie } from "../../models/movie";
import EventCard from "../cards/EventCard";

interface Props {
  cardData?: Movie;
}

const Invitations: React.FC<Props> = ({ cardData }) => {
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
    <div className="p-10 gap-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default Invitations;
