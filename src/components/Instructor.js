import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Location from "../components/Location";
import img1 from "../Assets/gradient.png";

const Instructor = () => {
  const url = "https://reqres.in/api/users?page=2";
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);

        setProfile(response.data);
      });
  }, []);

  return (
    <>
      <div className="container  shadow-sm mb-5 " style={{ marginTop: "2rem" }}>
        <div className="row justify-content-center">
          <div className="col-md-8 col-12 mt-4">
            <article>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {profile.map((item) => (
                  <>
                    <div className="col-md-4">
                      <div class="card mb-3">
                        <div class="img1">
                          <img src={img1} alt="" />
                        </div>
                        <div class="img2">
                          <img src={item.avatar} alt="" />
                        </div>
                        <div class="card-body">
                          <h5 class="card-tittle intructor-name">
                            {item.first_name} {item.last_name}{" "}
                          </h5>

                          <div class="d-flex justify-content-between align-items-center">
                            <div class="ratings">
                              <i class="bi bi-star-fill rating-color text-warning"></i>
                              <i class="bi bi-star-fill rating-color  text-warning"></i>
                              <i class="bi bi-star-fill rating-color  text-warning"></i>
                              <i class="bi bi-star-fill rating-color  text-warning"></i>
                              <i class="bi bi-star rating-color"></i>
                            </div>

                            <h5 class="review-count">56 reviews</h5>
                          </div>
                          <p class="card-text mt-2">$29.91/hour</p>
                          {/* <p class="mt-9">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-heart"
                              viewBox="0 0 16 16"
                            >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-bookmark"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                            </svg>
                          </p> */}
                          <div className="d-flex justify-content-center">
                            <Link
                              href="instructorProfile.html?avatar=${item.avatar}&firstName=${item.first_name}&lastName=${item.last_name}"
                              class="btn btn-primary"
                              id="viewProfileBtn"
                              to={`/instructor/${item.id}`}
                            >
                              <i class="bi bi-person-circle me-2"></i> View
                              Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
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
