import React, { useEffect, useState } from 'react';
import ContactForm from './phoneBook/contactForm';
import ContactList from './phoneBook/contactList';
import Filter from './phoneBook/filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsLS = JSON.parse(localStorage.getItem('contacts')) || [];
    if (contactsLS.length !== 0) {
      setContacts(contactsLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddNewContact = newContact => {
    const matchName = contacts.some(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (matchName) {
      return alert(`${newContact.name} is already in contacts`);
    }
    setContacts(prevState => ([...prevState, newContact]));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );

    return filteredContacts;
  };

  const handleDeleteContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddNewContact} />

      {contacts.length > 0 && (
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          {getVisibleContacts().length > 0 ? (
            <ContactList
              visibleContacts={getVisibleContacts()}
              onDeleteContact={handleDeleteContact}
            />
          ) : (
            <p>No contacts match the filter.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
