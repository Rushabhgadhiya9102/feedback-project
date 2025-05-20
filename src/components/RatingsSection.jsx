import React, { useState } from "react";
import Gameicons1 from '../assets/similar-games-1.webp'
import { FaArrowRight, FaStar } from "react-icons/fa6";

const RatingsSection = () => {
  const [hover, setHover] = useState(0);
  const [star, setStar] = useState(0);
  const [feedback, setFeedBack] = useState({});
  const [list, setList] = useState([]);

  const handleHover = (index) => {
    setHover(index);

    if (star != 0) {
      setStar(0);
    }
  };

  const handleLeave = (index) => {
    setHover(0);
    setStar(index);
  };

  const handleDown = (index) => {
    setStar(index);
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFeedBack({ ...feedback, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, { ...feedback, star: star }]);

    setFeedBack({ message: "" });
    setStar(0);
  };

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
                      name="message"
                      id=""
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

              <ul className="list-unstyled">
                {list.map((val, index) => (
                  <>
                    <li key={index} className="py-3">
                      {[...Array(5).keys()].map((_, index) => (
                        <FaStar
                          size={20}
                          color={val.star > index ? "green" : "lightgray"}
                        />
                      ))}
                      <p className="mt-3 bg-light p-3 rounded-3">
                        {val.message}
                      </p>
                      <div className="d-flex align-items-center gap-2">
                        <p>Did you find it helpful?</p>
                        <button className="btn btn-light rounded-pill">
                          Yes
                        </button>
                        <button className="btn btn-light rounded-pill">
                          No
                        </button>
                      </div>
                    </li>
                    <hr />
                  </>
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
                    <ul className="list-unstyled">
                        <li className="d-flex gap-3">
                            <img src={Gameicons1} className="img-fluid rounded-4" alt="" style={{width:"70px", height:"70px"}} />
                            <div>
                                <p className="mb-0">Mech vs Aliens: War Robots RPG</p>
                                <p className="mb-0">RightSoftLabs</p>
                                <p>3.8 <FaStar/></p>
                            </div>
                        </li>
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
