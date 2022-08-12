import React, { useContext, useState } from 'react';
import Contact from '../../components/Contact/Contact';
import About from '../../components/About/About';

import { UserContext } from '../../useContext';
import { dataAbout } from '../../defaultData';

import './home.css';

const TITLE = 'This Is Homepage';
const NO_TELP = 'No. Telp';
const GO = 'Go';

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const [phoneNumber, setPhoneNumber] = useState();

  const handleClick = () => {
    setUser({
      companyName: user.companyName,
      companyPhone: phoneNumber,
      companyAddress: user.companyAddress,
    });
  };

  const handleChange = (e) => {
    const reg = /[^0-9.-]/g;
    const newPhoneNumber = e.target.value.replace(reg, '');

    setPhoneNumber(newPhoneNumber);
  };

  const getPhoneContact = () => {
    return (
      <div className="phone-container">
        <p>{NO_TELP}</p>
        <input
          aria-label="input"
          type="text"
          pattern="[0-9.-]*"
          value={phoneNumber}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          {GO}
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="title-container">{TITLE}</div>
      <About dataAbout={dataAbout} />
      <div className="contact-wrapper">
        {getPhoneContact()}
        <Contact data={user} />
      </div>
    </div>
  );
}
