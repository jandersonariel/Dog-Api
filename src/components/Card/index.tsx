import React from 'react';
import './styles.css'

type card= {
  name: string;
  origin: string;
  img: string,
  temperament: string;
  life_span: string;
  height: string;
}

const Card = (prop: card) => {
  return (
  <div>
    <div className='card'>
      <text className='nome'>{"Name: " + prop.name}</text>
      <img src={prop.img} alt=''/>
      <div className='divFeature'>
        <text className='feature'>{"Origin: " + prop.origin}</text>
        <text className="feature">{"Temperament: " + prop.temperament}</text>
        <text className="feature">{"Life Span: " + prop.life_span}</text>
        <text className="feature">{"Height: " + prop.height + " cm"}</text>
      </div>
    </div>
  </div>
);
}

export default Card;