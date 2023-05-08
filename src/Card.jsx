import React from "react";

function Card(data) {
    let color="red";
    if (data.totalTime<=20){
        color="green";
    }
    else if(data.totalTime<=30 && data.totalTime>=20) color="orange";
  return (
    <>
        <div className="card">
          <div className="image">
             <img  src={data.poster}/>
          </div>

          <div className="content">
            <h1>{data.topic}</h1>
            <div className="buttom-part">
            <span>{data.channel}<br/><span style={{color}}>{data.totalTime} Hours</span></span>
            <a href={data.link}><button>Watch Now</button></a>
            </div>
          </div>
        </div>
    </>
  );
}
export default Card;

