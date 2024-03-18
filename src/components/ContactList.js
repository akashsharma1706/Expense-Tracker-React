import React from 'react';
import ContactCard from './ContactCard';
import './ContactList.css';

const ContactList = ({ contacts, getContactId }) => {
  const renderContactList = contacts.map((contact) => (
    <ContactCard key={contact.id} contact={contact} clickHandler={getContactId} />
  ));

  return (
    <>
      <h3>Expense List</h3>
      {renderContactList}
    </>
  );
};

export default ContactList;


