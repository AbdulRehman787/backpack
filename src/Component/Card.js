import React from "react";
import './style.css'
const Card = ({state}) => {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
      {state.map((curElem,index)=>{
        return(
            <>
            <div class="col">
            <div class="card">
              <img src={curElem.img} className='img' alt="..." />
              <div class="card-body">
                <h5 class="card-title">{curElem.title}</h5>
                <p class="card-text">{curElem.description}</p>
              </div>
            </div>
          </div>
            </>
        )
      })}
       
      </div>
    </>
  );
};

export default Card;
