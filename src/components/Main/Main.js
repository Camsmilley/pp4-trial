import React from "react";
import "./main.css";
import { SlLocationPin } from "react-icons/sl";
import { LuClipboardEdit } from "react-icons/lu";
import img from "../../Assets/img.jpg";
import img2 from "../../Assets/img2.jpeg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpeg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.webp";
import img9 from "../../Assets/img9.jpg";
import img10 from "../../Assets/img10.jpg";
import img11 from "../../Assets/img11.jpg";
import img13 from "../../Assets/img13.jpg";
import img15 from "../../Assets/img15.webp";
import { Link } from "react-router-dom";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Siargao Island",
    location: "Philippines",
    grade: "All levels",
    fees: "$70",
    description:
      "Siargao Island is a tropical paradise located in the Surigao del Norte province of the Philippines. This teardrop-shaped island has grown steadily in popularity over the past few years and is often known as the country’s surfing capital. ",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Baler, Aurora",
    location: "Philippines",
    grade: "All levels",
    fees: "$65",
    description:
      "Baler is a town on the Philippine island of Luzon. In its center, Museo de Baler chronicles colonial history. On the coast, Cemento Beach is known for powerful surf, and Sabang Beach is lined with resorts. ",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Calicoan Island",
    location: "Philippines",
    grade: "Intermediate to Advanced Surfers",
    fees: "$50",
    description:
      "Calicoan is an island east of Leyte Gulf, off the southeastern point of Samar in the Philippines. It is one of the islands that are part of the municipality of Guiuan, in the province of Eastern Samar.",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Daet, Camarines Norte",
    location: "Philippines",
    grade: "All levels",
    fees: "$60",
    description:
      "Daet, officially the Municipality of Daet, is a 1st class municipality and capital of the province of Camarines Norte, Philippines. According to the 2020 census, it has a population of 111,700 people. The municipality is a popular surfing spot among surfers worldwide.",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Baras, Catanduanes",
    location: "Philippines",
    grade: "Beginners to intermediate surfers",
    fees: "$50",
    description:
      "Catanduanes, otherwise referred to as the “Happy Island,” boasts of a stunning landscape comprising of rolling hills, hidden lagoons, waterfalls, secluded beaches, natural pools, and spectacular rock formations.",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "San Narciso, Zambales",
    location: "Philippines",
    grade: "Beginners to intermediate surfers",
    fees: "$50",
    description:
      "Surfing as a sport just recently started in Zambales, specifically in San Narciso. Mostly known for longboard waves, it gets the same swells as La Union during typhoon season. More than surfing, the jovial atmosphere on the tourist spots in Zambales has become a magnet that attracts strangers to become friends.",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Real, Quezon",
    location: "Philippines",
    grade: "All levels",
    fees: "$80",
    description:
      "If you are looking for surfing tours that is only a short drive away from Manila and have the waves of Baler and La Union on a good day, Real is your best option. It has a smaller crowd, too, compared to other surf destinations in the country. ",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "San Juan, La Union",
    location: "Philippines",
    grade: "All levels",
    fees: "$80",
    description:
      'San Juan, La Union – the name itself conjures up visions of sun-kissed beaches, turquoise waters, and the exhilarating rush of riding a perfect wave. No wonder its been dubbed the "Surfing Capital of the North" in the Philippines! ',
  },

  {
    id: 9,
    imgSrc: img15,
    destTitle: "Lanuza, Surigao Del Sur",
    location: "Philippines",
    grade: "All levels",
    fees: "$80",
    description:
      "Lanuza is noted as a surfing destination with its various surfing areas from Reef Breaks to Beach Breaks. Surfing season is between the months of November to March where big waves are in constant motion. ",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <div className="title">
          <h3>Surfing Destination</h3>
        </div>
        <small>
          HERE ARE SOME OF THE HIGHLY RECOMMENDED SURFING DESTINATIONS IN THE
          COUNTRY.
        </small>
        <h4></h4>
        <div className="secContent grind">
          {Data.map(
            ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
              return (
                <div key={id} className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle}></img>
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="contenent flex">
                      <SlLocationPin className="icon" />
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>
                          {grade}
                          <small>+1</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      Details <LuClipboardEdit className="icon" />
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      <div class="surfing">
        <div className="row welcome text-justify gy-3">
          <div className="col-12">
            <h2 className="text-center mt-5">
              {" "}
              HOW TO BECOME A SURFING INSTRUCTOR
            </h2>
          </div>

          <div className="col-12 p-5">
            <p>
              Surf instructors teach others the proper techniques for surfing,
              along with safety rules and any associated regulations. Generally,
              surf instructors teach according to standards established by
              organizations such as the International Surfing Association(ISA),
              which is considered the worldwide governing authority for the
              sport at the Olympic and professional levels.According to the ISA,
              surfing is a sport that consists of a range of activities,such as
              short- and long-board surfing, bodyboarding, stand-up paddle
              racing and surfing, kitesurfing, bodysurfing and wakesurfing
            </p>
          </div>
        </div>
      </div>

      <div className="surfingInstructors p-5">
        <div className="row padding gy-3">
          <div className="col-md-12 col-lg-6 p-5">
            <h2>Become a Surfing Instrutor</h2>
            <p>
              wave Guru on a fulfilling career as a surf instructor – one of the
              most rewarding jobs imaginable! Share your passion, skills, and
              knowledge with others, witnessing the joy of your students as they
              embrace the world of surfing. Enjoy a uniquely amazing lifestyle
              and immerse yourself in a culture where you work alongside
              like-minded and passionate individuals.
            </p>
            <p>
              This is not just a job; it’s a journey of personal and
              professional development, allowing you to hone your people,
              leadership, and coaching skills while earning a living doing what
              you love.
            </p>
            <br />
            <Link to="./surfingInstructor" className="btn btn-primary">
              Learn More
            </Link>
          </div>
          <div className="col-lg-6">
            <img src={img13} class="img-fluid" />
          </div>
        </div>
      </div>

      <figure>
        <div className="fixed-wrap">
          <div id="fixed"></div>
        </div>
      </figure>

      <div className="lessonOfferd ">
        <div className="row welcome text-center gy-3">
          <div className="col-12">
            <h2>Type of Lesson Offered</h2>
          </div>
        </div>
      </div>
      <div className="lesson">
        <div className="row padding gy-3">
          <div className="col-md-4">
            <div className="card">
              <img className="card-imd-top" src={img9} />
              <div className="card-body">
                <h4 className="card-title">Beginner</h4>
                <p className="card-text">What is a beginner surfer?</p>
                <button
                  onClick="beginner"
                  className="btn flex"
                  style={{ color: "white" }}
                >
                  Details <LuClipboardEdit className="icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-imd-top" src={img10} />
              <div class="card-body">
                <h4 className="card-title">Intermediate</h4>
                <p className="card-text">What is an intermediate surfer?</p>
                <button className="btn flex" style={{ color: "white" }}>
                  Details <LuClipboardEdit className="icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-imd-top" src={img11} />
              <div className="card-body">
                <h4 className="card-title">Advanced</h4>
                <p className="card-text">What is an advanced surfer?</p>
                <button className="btn flex" style={{ color: "white" }}>
                  Details <LuClipboardEdit className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
