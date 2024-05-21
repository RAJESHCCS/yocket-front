import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'
// import limage from '../assets/cop1.png'
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page"> {/* Added class name */}
{/* import limage from '../../public/assets/simulate.jpg' */}
    {/* <img src={limage}  alt='noimage found'/> */}
      <h1>Welcome to the Fugitive Capture Game</h1> 
      <button onClick={() => navigate('/city-selection')}>Start</button>
    </div>
  );
};

export default LandingPage;

