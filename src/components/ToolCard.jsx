import React from 'react';

const ToolCard = ({ name, description, link, logo }) => (
  <div className='tool-card'>
    <img src={logo} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={link} target='_blank' rel='noopener noreferrer'>Use Tool →</a>
  </div>
);

export default ToolCard;