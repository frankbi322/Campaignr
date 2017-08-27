import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Campaignr</h1>
      Collect feedback from your users!
      <div>
        <Link to="/surveys">Manage your surveys!</Link>
      </div>
    </div>
  );
};

export default Landing;
