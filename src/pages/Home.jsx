import React from 'react';
import ToolCard from '../components/ToolCard';
import tools from '../data/tools.json';

const Home = () => (
  <div className='tool-container'>
    {tools.map((tool, index) => (
      <ToolCard key={index} {...tool} />
    ))}
  </div>
);

export default Home;