import React from 'react';

const Banner = ({ title, subtitle, backgroundImage }) => {
  const divStyle = {
    height: '75vh',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div style={divStyle}>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center position-relative h-100 w-100"
        style={{ backgroundColor: '#00000072' }}
      >
        <h1 className="text-white">{title}</h1>
        <h3 className="text-white">{subtitle}</h3>
      </div>
    </div>
  );
};

export default Banner;
