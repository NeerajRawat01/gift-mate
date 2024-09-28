import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { Movie } from "../../models/movie";
import { useNavigate } from "react-router-dom";

interface Props {
  cardData: Movie;
}

const MovieCard: React.FC<Props> = ({ cardData }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/movie-detail/${cardData.imdbID}`);
      }}
      className="border-2 rounded relative flex flex-col gap-2 hover:shadow-md cursor-pointer"
    >
      <BsFillBookmarkPlusFill className="absolute text-blue-700 top-0.5 right-0.5 text-3xl" />
      <img
        loading="lazy"
        className=" h-[20rem] object-cover"
        src={cardData.Poster}
        alt="Movie Poster"
      />
      <div className="flex flex-col text-gray-600 gap-2 px-3 py-2">
        <h1>
          <span className="font-bold">Title : </span> {cardData.Title}
        </h1>
        <h2>
          <span className="font-bold">Year : </span>
          {cardData.Year}
        </h2>
        <h2>
          <span className="font-bold">Type : </span>
          {cardData.Type}
        </h2>
      </div>
    </div>
  );
};

export default MovieCard;
