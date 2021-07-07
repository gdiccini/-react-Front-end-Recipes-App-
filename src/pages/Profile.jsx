import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  return (
    <div className="primary-container inside">
      <Header title="Perfil" fullHeader={ false } />
      <h1>perfil</h1>
      <Footer />
    </div>
  );
};

export default Profile;
