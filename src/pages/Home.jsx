import React, { useState } from 'react';
import NameInput from '../components/NameInput';
import Surprise from '../components/Surprise';

const Home = () => {
  const [name, setName] = useState('');

  return (
    <div>
      {!name ? <NameInput setName={setName} /> : <Surprise name={name} />}
    </div>
  );
};

export default Home;