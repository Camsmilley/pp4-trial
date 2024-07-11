import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Location from "../components/Location";
import img1 from "../Assets/gradient.png";

const Instructor = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const url = "https://reqres.in/api/users?page=2";
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setProfile(response.data);
      });
  }, []);

  useEffect(() => {
    const userData = sessionStorage.getItem("userData");
    setIsLoggedIn(!!userData);
  }, []);

  const handleProfileClick = (id) => {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      navigate(`/instructor/${id}`);
    } else {
      alert("You must be logged in to view the profile.");
    }
  };

  return (
    <>
      <div className="container shadow-sm mb-5" style={{ marginTop: "2rem" }}>
        <div className="row justify-content-center">
          <div className="col-md-8 col-12 mt-4">
            <article>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {profile.map((item) => (
                  <div className="col-md-4" key={item.id}>
                    <div className="card mb-3">
                      <div className="img1">
                        <img src={img1} alt="" style={{ height: "150px" }} />
                      </div>
                      <div className="img2">
                        <img src={item.avatar} alt="" />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title instructor-name">
                          {item.first_name} {item.last_name}
                        </h5>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="ratings">
                            <i className="bi bi-star-fill rating-color text-warning"></i>
                            <i className="bi bi-star-fill rating-color text-warning"></i>
                            <i className="bi bi-star-fill rating-color text-warning"></i>
                            <i className="bi bi-star-fill rating-color text-warning"></i>
                            <i className="bi bi-star rating-color"></i>
                          </div>
                          <h5 className="review-count">56 reviews</h5>
                        </div>
                        <p className="card-text mt-2">$29.91/hour</p>
                        <div className="d-flex justify-content-center">
                          <button
                            onClick={() => handleProfileClick(item.id)}
                            className="btn btn-primary"
                            id="viewProfileBtn"
                          >
                            <i className="bi bi-person-circle me-2"></i> View
                            Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <div className="col-md-4 col-12">
            <Location />
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
