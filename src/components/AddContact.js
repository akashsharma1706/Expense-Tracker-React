import React, { useState } from 'react';
import './AddContact.css'

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert("All fields are mandatory!");
      return;
    }
    addContactHandler({ name, email, description });
    setName('');
    setEmail('');
    setDescription('');
  };

  return (
    <>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Expense Name : </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <label>Amount : </label>
          <input
            type="number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Amount"
          />
        </div>
        <div>
          <label>Expense Description : </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <button>Add Expense</button>
      </form>
    </>
  );
};

export default AddContact;

