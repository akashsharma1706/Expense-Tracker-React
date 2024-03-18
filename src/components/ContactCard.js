import React from 'react';
import './ContactCard.css'

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email, description } = contact;

  return (
    <>
      <div>
        <div>{name}</div>
        <div>{email}</div>
        <div>{description}</div>
      </div>
      <button onClick={() => clickHandler(id)}>Delete</button>
    </>
  );
};

export default ContactCard;
