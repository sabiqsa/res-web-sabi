import React from 'react';

import './Contact.css';

export default function Contact(props) {
  const { data } = props;
  return (
    <div className="contact-container">
      <p>{data?.companyName}</p>
      <p>{data?.companyAddress}</p>
      <p>{data?.companyPhone}</p>
    </div>
  );
}
