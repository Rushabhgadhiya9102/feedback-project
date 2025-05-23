import React, { useEffect, useState } from "react";
import Gameicons1 from "../assets/similar-games-1.webp";
import Gameicons2 from "../assets/similar-games-2.webp";
import Gameicons3 from "../assets/similar-games-3.webp";
import Gameicons4 from "../assets/similar-games-4.webp";
import Gameicons5 from "../assets/similar-games-5.webp";
import Gameicons6 from "../assets/similar-games-6.webp";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { LuTrash2 } from "react-icons/lu";

const RatingsSection = () => {

  // ---------- U S E - S T A T E ------------

  const [hover, setHover] = useState(0);
  const [star, setStar] = useState(0);
  const [feedback, setFeedBack] = useState({});
  const [list, setList] = useState([]);

  // ----------- U S E - E F F E C T --------------
  
  useEffect(() => {

    let savedList = JSON.parse(localStorage.getItem("list")) || [];
    setList(savedList);
    console.log("getitem:", savedList);

  }, []);

  useEffect(() => {

    localStorage.setItem("list", JSON.stringify(list));
    console.log("setitem:", list);

  }, [list]);

  // ---------- H A N D L E R S - H O V E R ------------

  const handleHover = (index) => {
    setHover(index);

    if (star != 0) {
      setStar(0);
    }
  };

  // ---------- H A N D L E R S - L E A V E ------------

  const handleLeave = (index) => {
    setHover(0);
    setStar(index);
  };

  // ---------- H A N D L E R S - D O W N ------------

  const handleDown = (index) => {
    setStar(index);
  };

  // ---------- H A N D L E R S - C H A N G E ------------

  const handleChange = (event) => {

    let { name, value } = event.target;
    setFeedBack({ ...feedback, [name]: value });

  };

  // ---------- H A N D L E R S - S U B M I T ------------

  const handleSubmit = (event) => {

    event.preventDefault();
    setList([...list, { ...feedback, star: star, id: Date.now()}]);
    setFeedBack({});
    setStar(0);

  };

  // ---------- H A N D L E R S - D E L E T E ------------

  const handleDelete = (id) => {

    let feedbackData = list.filter((val) => val.id !== id);
    setList(feedbackData);

  };

  const GamesData = [
    {
      name: "Mech vs Aliens: War Robots RPG",
      company: "RightSoftLabs",
      img: Gameicons1,
      rating: 3.4,
    },
    {
      name: "Rise of dune",
      company: "FUNGAME PTE.LTD",
      img: Gameicons2,
      rating: 3.6,
    },
    {
      name: "Stellaris: Galaxy Command",
      company: "GameBear Tech",
      img: Gameicons3,
      rating: 4.1,
    },
    {
      name: "Infinite Galaxy",
      company: "CamelStudio",
      img: Gameicons4,
      rating: 3.5,
    },
    {
      name: "Frostpunk: Beyond the Ice",
      company: "Com2uS",
      img: Gameicons5,
      rating: 4.3,
    },
    {
      name: "Stellar Wind: Outer Space Game",
      company: "Entrophy Games Studio",
      img: Gameicons6,
      rating: 3.5,
    },
  ];

  return (
    <>
      <section className="Ratings">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="ratings-item">
                <div className="title">
                  <h4 className="d-flex align-items-center gap-3">
                    Ratings and reviews <FaArrowRight />
                  </h4>
                </div>
                <div className="content my-5 border border-success rounded-4 p-4">
                  <form method="post" onSubmit={handleSubmit}>
                    {[...Array(5).keys()].map((_, index) => (
                      <FaStar
                        key={index}
                        size={20}
                        onMouseOver={() => handleHover(index + 1)}
                        onMouseLeave={() => handleLeave(index + 1)}
                        onMouseDown={() => handleDown(index + 1)}
                        color={
                          hover > index || star > index ? "green" : "lightgray"
                        }
                      />
                    ))}

                    <textarea
                      id="Message"
                      name="message"
                      className="form-control my-3"
                      placeholder="Provide Feedback"
                      value={feedback.message || ""}
                      maxLength="50"
                      onChange={handleChange}
                    ></textarea>
                    <button className="btn btn-success">Submit</button>
                  </form>
                </div>
              </div>

              <ul className="list-unstyled overflow-y-scroll" style={{height:"500px"}}>
                {list.map((val, index) => (
                  <li key={val.id} className="py-3">
                    {[...Array(5).keys()].map((_, index) => (
                      <FaStar
                        key={index}
                        size={20}
                        color={val.star > index ? "green" : "lightgray"}
                      />
                    ))}

                    <p className="mt-3 bg-light p-3 rounded-3">{val.message}</p>
                    <div className="d-flex align-items-center gap-2">
                      <p>Did you find it helpful?</p>
                      <button className="btn btn-light rounded-pill">
                        Yes
                      </button>
                      <button className="btn btn-light rounded-pill">No</button>
                      <button
                        className="btn text-danger"
                        onClick={() => handleDelete(val.id)}
                      >
                        <LuTrash2 size={20} />
                      </button>
                    </div>
                    <hr />
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-4">
              <div className="similar-item">
                <div className="title">
                  <h4 className="d-flex align-items-center gap-3">
                    Similar games <FaArrowRight />
                  </h4>
                </div>
                <div className="content">
                  <ul className="list-unstyled mt-5 h-75">
                    {GamesData.map((val, index) => {
                      const { name, company, rating, img } = val;

                      return (
                        <li className="d-flex gap-3" key={index}>
                          <img
                            src={img}
                            className="img-fluid rounded-4"
                            alt="icons-img"
                            style={{ width: "70px", height: "70px" }}
                          />
                          <div>
                            <p className="mb-0">{name}</p>
                            <p className="mb-0">{company}</p>
                            <p className="d-flex align-items-center gap-1">
                              {rating} <FaStar />
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RatingsSection;
