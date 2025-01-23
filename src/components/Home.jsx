import React from 'react';
import { BiSolidPaperPlane } from 'react-icons/bi';
import "../styles/home.css";

const Home = () => {
  return (
    <div className='main-content'>
      <div className='form'>
        <BiSolidPaperPlane style={{ height: "58px", width: "54px" }} />
        <h1>SUSCRIBE</h1>
        <input type="text" placeholder='Enter your email' />
        <button>SUSCRIBE</button>
      </div>
    </div>
  );
};

export default Home;
