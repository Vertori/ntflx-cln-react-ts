import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = (): JSX.Element => {
  return (
    <>
      <Main />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Now Playing" fetchURL={requests.requestNowPlaying} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default Home;
