import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import CountUp from "react-countup";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Unlock Your Dream Home: Explore Our Listings Today!
          </h1>

          {/* <p>
            Discover Your Dream Home Today! Explore our curated collection of
            exclusive listings tailored to your lifestyle. With easy navigation
            and comprehensive details, finding your perfect home is just a click
            away. Start your journey towards homeownership now!
          </p> */}
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>
                <CountUp end={16} durations={3} />+
              </h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>
                <CountUp end={200} durations={3} />
              </h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>
                <CountUp end={1200} durations={3} />+
              </h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}
export default HomePage;
