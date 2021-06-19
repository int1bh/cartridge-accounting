import React from "react";

const Card = (props) => {
  return (
      <div className='col s2'>
    <div className="card small green lighten-4">
      <div className="card-content">
        <h1 className="card-title">{props.count}</h1>
        <span>
          {props.name}
        </span>
      </div>
    </div>
    </div>
  );
};

export default Card
