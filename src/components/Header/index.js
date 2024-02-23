import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import "./index.css";

const Header = (props) => {
  const logout = () => {
    Cookies.remove("jwt_token");
    const { history } = props;
    history.replace("/login");
  };
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <h1> Courier Tracking</h1>
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/parcels" className="nav-link">
            <li>Tracking</li>
          </Link>
          <Link to="/about" className="nav-link">
            <li>About</li>
          </Link>
        </ul>
        <button type="button" className="logout-desktop-btn" onClick={logout}>
          Logout
        </button>
        <button type="button" className="logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  );
};
export default withRouter(Header);
