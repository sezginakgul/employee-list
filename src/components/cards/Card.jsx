import React, { useState } from "react";
import data from "../../helper/data";
import Button from "../button/Button";
import "./Card.css";

const Card = () => {
  const [counter, setCounter] = useState(0);

  const handleChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "next") {
      if (counter < 15) {
        setCounter(counter + 5);
      } else {
        setCounter(0);
      }
    } else if (e.target.value === "prev") {
      if (counter < 5) {
        setCounter(15);
      } else {
        setCounter(counter - 5);
      }
    }
  };
  return (
    <div className="contains">
      <h1>Employee List</h1>
      <div className="screen">
        <p>
          Employees {counter + 1} to {counter + 5}
        </p>
      </div>
      {data.slice(counter, counter + 5).map((item) => {
        const { name, age, email, image, id } = item;
        return (
          <div className="container" key={id}>
            <div className="img">
              <img src={image} alt="img" onClick={handleChange} />
            </div>
            <div className="disc">
              <div className="name">{name}</div>
              <div className="email">{email}</div>
              <div className="age">{age} years</div>
            </div>
          </div>
        );
      })}
      <Button say={handleChange} />
    </div>
  );
};

export default Card;
