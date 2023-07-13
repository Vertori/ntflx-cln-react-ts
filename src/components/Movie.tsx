import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { movieType } from "../types";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

type Props = {
  movie: movieType;
};

const Movie = ({ movie }: Props): JSX.Element => {
  const [like, setLike] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.poster_path,
        }),
      });
    } else {
      alert("You have to log in to save a movie!");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2 cursor-pointer">
      <img
        className="w-full h-auto block rounded-sm"
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        alt={movie?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80  hover:opacity-100 text-white">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center px-8">
          {movie?.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
