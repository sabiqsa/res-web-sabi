import React from 'react';

import './About.css';

export default function About(props) {
  const { dataAbout } = props;

  const aboutOne = dataAbout?.[0]?.title;
  const aboutTwo = dataAbout?.[1]?.title;

  return (
    <div className="about-container">
      <div className="about-wrapper">
        <span>{aboutOne}</span>
        <p>{dataAbout?.[0]?.data}</p>
      </div>
      <div className="about-second-wrapper">
        <span>{aboutTwo}</span>
        <div className="about-item-container">
          {dataAbout?.[1]?.data?.map((item, idx) => {
            return (
              <div className="about-item" key={idx}>
                {item.description}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
