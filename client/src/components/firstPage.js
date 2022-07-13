import './firstPage.css';

import { useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from './navbar';

function FirstPage() {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/Signup');
  };

  const navigateToLogin = () => {
    navigate('/Login');
  };

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="two-buttons">

          <button className="first-button" type="submit" onClick={navigateToSignup}>Sign up</button>

          <button className="first-button" type="submit" onClick={navigateToLogin}>Log in</button>

        </div>
      </div>
      <div className="full-size-img" />

    </div>
  );
}

export default FirstPage;
