import img1 from "../Assets/gradient.png";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InstructorProfile = () => {
  const url = "https://reqres.in/api/users?page=2";
  const [profile, setProfile] = useState([]);
  const { id } = useParams();
  const ids = parseInt(id);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);

        setProfile(response.data);
      });
  }, []);

  const result = profile.filter((p) => p.id === ids);
  console.log(result);

  return (
    <>
      <section className="h-auto gradient-custom-2">
        <div className="container-fluid py-5 h-100">
          <div className="row d-flex justify-content-center">
            {result.map((item) => (
              <>
                <div className="col col-lg-9 col-xl-8">
                  <div className="card">
                    <div
                      className="rounded-top text-white d-flex flex-row"
                      style={{
                        backgroundImage: `url(${img1})`,
                        height: "200px",
                      }}
                    >
                      <div
                        className="ms-4 mt-5 d-flex flex-column"
                        style={{ width: "150px" }}
                      >
                        <img
                          src={item.avatar}
                          alt="Generic placeholder image"
                          className="img-fluid img-thumbnail rounded-circle mt-4 mb-2"
                          style={{ width: "150px", zIndex: "1" }}
                        />
                      </div>
                      <div className="ms-3" style={{ marginTop: "130px" }}>
                        <h5 id="instructorName"> </h5>
                        <p>General Luna SDN</p>
                      </div>
                    </div>
                    <div className="p-4 text-black bg-body-tertiary">
                      <div className="d-flex justify-content-start text-center py-1 text-body">
                        <div>
                          <p className="mb-1 h5">56</p>
                          <p className="small text-muted mb-0">Reviews</p>
                        </div>
                        <div className="px-3">
                          <p className="mb-1 h5">200</p>
                          <p className="small text-muted mb-0">Likes</p>
                        </div>
                        <div>
                          <p className="mb-1 h5">10</p>
                          <p className="small text-muted mb-0">Favorate</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-4 text-black">
                      <div className="mb-2  text-body">
                        <p className="lead fw-normal mb-1">Bio</p>
                        <div className="p-4 bg-body-tertiary">
                          <p className="font-italic mb-1">
                            My name is Marama Tokong and I've been catching
                            waves and sharing my passion for surfing for 26
                            years. Having grown up by the beach in Siargao, the
                            ocean has always been my playground. I started
                            surfing at a young age and there's nothing more
                            rewarding than helping others experience the thrill
                            of riding a wave.
                          </p>
                        </div>
                      </div>

                      <div className="mb-2 text-body">
                        <p className="lead fw-normal mb-1">
                          Experience and Certificates
                        </p>
                        <div className="p-4 bg-body-tertiary">
                          <p className="font-italic mb-1">
                            Surfing Champion 2012, Best Surfer
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <img src="img/cert.webp" className="w-100 h-100" />
                          </div>
                          <div className="col-md-4">
                            <img src="img/cert.webp" className="w-100 h-100" />
                          </div>
                          <div className="col-md-4">
                            <img src="img/cert.webp" className="w-100 h-100" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <p>
                      <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Book a lesson
                      </button>
                    </p>
                    <div className="collapse" id="collapseExample">
                      <div className="card-body border bg-body-tertiary mb-5">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadio1"
                          >
                            Individual
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadio2"
                          >
                            Group
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadio3"
                          >
                            Family
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            className="form-control "
                            type="date"
                            id="datepicker"
                            width="270"
                          />
                          <input
                            className="form-control mt-4"
                            type="time"
                            id="datepicker"
                            width="270"
                          />
                        </div>

                        <div>
                          <p className="mt-4">
                            <strong>Total Price: $29.91</strong>
                          </p>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <div className="card ">
                          <div
                            className="bg-primary rounded-top"
                            style={{ height: "150px", width: "100%" }}
                          ></div>
                          <div className="img2">
                            <img src="img/marama.jpg" alt="" />
                          </div>
                          <hr className="mb-0" />
                          <div className="card-body">
                            <p className="card-text">
                              <em>
                                " Very professional instructor, caring and
                                cheap. Thank you so much for the experience"
                              </em>
                            </p>
                            <h5 className="review-count ms-auto">- Kyle</h5>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card ">
                          <div
                            className="bg-primary rounded-top"
                            style={{ height: "150px", width: "100%" }}
                          ></div>
                          <div className="img2">
                            <img src="img/marama.jpg" alt="" />
                          </div>
                          <hr className="mb-0" />
                          <div className="card-body">
                            <p className="card-text">
                              <em>
                                " Very professional instructor, caring and
                                cheap. Thank you so much for the experience"
                              </em>
                            </p>
                            <h5 className="review-count ms-auto">- Kyle</h5>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card ">
                          <div
                            className="bg-primary rounded-top"
                            style={{ height: "150px", width: "100%" }}
                          ></div>
                          <div className="img2">
                            <img src="img/marama.jpg" alt="" />
                          </div>
                          <hr className="mb-0" />
                          <div className="card-body">
                            <p className="card-text">
                              <em>
                                " Very professional instructor, caring and
                                cheap. Thank you so much for the experience"
                              </em>
                            </p>
                            <h5 className="review-count ms-auto">
                              <strong />- Kyle
                            </h5>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mb-4 text-body">
                        <p className="lead fw-normal mb-0">Recent photos</p>
                        <p className="mb-0">
                          <a href="#!" className="text-muted">
                            Show all
                          </a>
                        </p>
                      </div>
                      <div className="row g-2">
                        <div className="col mb-2">
                          <img
                            src="img/surf.jpg"
                            alt="image 1"
                            className="w-100 "
                          />
                        </div>
                        <div className="col mb-2">
                          <img
                            src="img/marama1.jpg"
                            alt="image 1"
                            className="w-100 "
                          />
                        </div>
                      </div>
                      <div className="row g-2">
                        <div className="col">
                          <img
                            src="img/wave2.jpg"
                            alt="image 1"
                            className="w-100 h-100 "
                          />
                        </div>
                        <div className="col">
                          <img
                            src="img/wave1.jpg"
                            alt="image 1"
                            className="w-100 h-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorProfile;
