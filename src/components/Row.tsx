import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { movieType } from "../types";
import Movie from "./Movie";

type Props = {
  title: string;
  fetchURL: string;
};

const Row = ({ title, fetchURL }: Props): JSX.Element => {
  const [movies, setMovies] = useState<movieType[]>([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center ">
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide">
        <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={4}
            slidesPerView={"auto"}
            slidesPerGroup={2}
            navigation={true}
          >
            {movies.map((item, id) => {
              return (
                <SwiperSlide key={id}>
                  <Movie movie={item} key={id} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Row;
