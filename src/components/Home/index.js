import Header from "../Header";
import "./index.css";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Courier Tracking</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="dresses to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          A tracking number is a unique identification code assigned to a
          package or shipment that allows the sender, recipient, and carrier to
          track its progress through delivery. Tracking numbers can be composed
          of letters and numbers, and their format varies depending on the
          delivery service or postal service being used.
        </p>
        <Link to="/parcels">
          <button type="button" className="shop-now-button">
            Parcels
          </button>
        </Link>
      </div>
    </div>
  </>
);

export default Home;
