import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import ContactForm from './phoneBook/contactForm';
import ContactList from './phoneBook/contactList';
import Filter from './phoneBook/filter';
import { getContacts } from 'redux/Store/Selectors/selctors';

const App = () => {

 const contacts = useSelector(getContacts);
  const hasContacts = contacts.length > 0;

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />
        <div>
        <h2>Contacts</h2>
        {hasContacts &&  <Filter />}
         
            <ContactList/>
        </div>
    </div>
  );
};

export default App;
