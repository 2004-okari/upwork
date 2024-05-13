import React from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigation = useNavigate();

  const handleHistory = () => {
    navigation('/home', {
      replace: true,
    });
  };
  return (
    <div>
      <div>
        <p>This is a story of all the opportunities that I didnt take</p>
        <p>All projects posted here are from job posts on upwork</p>
        <p>this page is dedicated to showcasing what your app might need</p>
        <p>Loading...</p>
        <button type='button' onClick={handleHistory}>Home</button>
      </div>
      <div>
        <p>Hi honey! Im home..</p>
        <p>Hi honey! Im home..</p>
        <p>Hi honey! Im home..</p>
        <p>Hi honey! Im home..</p>
      </div>
    </div>
  );
};

export default SplashScreen;
