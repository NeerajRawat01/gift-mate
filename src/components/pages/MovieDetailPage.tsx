import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../store/selectors/movie.selector";
import { MoviesActionType } from "../../store/actions/actions.constants";
import { IoMdArrowBack } from "react-icons/io";
import Spinner from "../Spinner";

const MovieDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id)
      dispatch({
        type: MoviesActionType.FETCH_MOVIE_BY_ID,
        payload: id,
      });
  }, [id, dispatch]);

  const movieData = useSelector(getMovieDetail);

  if (!movieData) {
    return <Spinner />;
  }

  return (
    <div className="flex gap-10 p-10">
      <IoMdArrowBack
        onClick={() => navigate(-1)}
        className="text-3xl cursor-pointer"
      />
      <div className="">
        <img
          className="h-[40rem] object-cover"
          src={movieData?.Poster}
          alt="Movie Poster"
        />
      </div>
      <div className="flex flex-col gap-2 text-xl">
        <span className="text-5xl">{movieData?.Title}</span>
        <span>
          <span className="font-bold">Year : </span> {movieData?.Year}
        </span>
        <span>
          <span className="font-bold">Type : </span> {movieData?.Type}
        </span>
        <span>
          <span className="font-bold">Actors : </span> {movieData?.Actors}
        </span>
        <span>
          <span className="font-bold">Awards : </span> {movieData?.Awards}
        </span>
        <span>
          <span className="font-bold">Director : </span> {movieData?.Director}
        </span>
        <span>
          <span className="font-bold">Country : </span> {movieData?.Country}
        </span>
        <span>
          <span className="font-bold">Language : </span> {movieData?.Language}
        </span>
        <span>
          <span className="font-bold">Plot : </span>
          {movieData?.Plot}
        </span>
        <span>
          <span className="font-bold">Released : </span> {movieData?.Released}
        </span>
        <span>
          <span className="font-bold">imdbRating : </span>{" "}
          {movieData?.imdbRating}
        </span>
        <span>
          <span className="font-bold">imdbVotes : </span> {movieData?.imdbVotes}
        </span>
      </div>
    </div>
  );
};

export default MovieDetailPage;
