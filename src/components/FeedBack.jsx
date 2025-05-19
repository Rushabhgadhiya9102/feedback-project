import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const FeedBack = () => {
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
  };

  return (
    <>
      <h1>FeedBack</h1>

      <form method="post" onSubmit={handleSubmit}>
        {[...Array(5).keys()].map((_, index) => (
          <FaStar
            size={30}
            onMouseOver={() => handleHover(index + 1)}
            onMouseLeave={() => handleLeave(index + 1)}
            onMouseDown={() => handleDown(index + 1)}
            color={hover > index || star > index ? "gold" : "gray"}
          />
        ))}
        <br />
        <button>Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>No. </th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {list.map((val, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                {
                  [...Array(5).keys()].map((_,index)=>(
                    <FaStar  size={30} color={ val.star > index ? "gold" : "gray"} />
                  ))
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FeedBack;
