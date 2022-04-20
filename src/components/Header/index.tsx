import React from 'react';
import './styles.css'

type header = {
  text: string;
}

const Header = (prop: header) => {
  return (
  <div>
    <text>{prop.text}</text>
  </div>
);
}

export default Header;