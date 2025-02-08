import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../img/logo.png";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const location = useLocation();
  const [currentCat, setCurrentCat] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const cat = searchParams.get("cat");
    setCurrentCat(cat ? cat : "");
  }, [location.search]);

  const categories = [
    "art",
    "science",
    "technology",
    "cinema",
    "design",
    "food",
  ];

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          {categories.map((cat) => (
            <Link className="link" to={`/?cat=${cat}`} key={cat}>
              <h6
                style={{
                  textTransform: currentCat === cat ? "uppercase" : "lowercase",
                  fontSize: currentCat === cat ? "18px" : "16px",
                  textDecoration: currentCat === cat ? "underline" : "",
                }}
              >
                {cat.toUpperCase()}
              </h6>
            </Link>
          ))}
          {/* <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link> */}

          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
