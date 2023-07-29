import React from "react";

const Card = ({title}) => {
  return (
    <div className="card">
      <img src={require('../assets/images/card.png')} alt="" />
      <div>
      <h2>{title}</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typeset ting
        industry. Lorem Ipsum has been the...
      </p>
      </div>
    </div>
  );
};

export default Card;
