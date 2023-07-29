import React from "react";

const Card = ({title,link}) => {
  const handleClick=()=>{
    if(link){
    window.open(link,"_blank").focus();
    }
  }
  return (
    <div className="card" onClick={handleClick}>
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
