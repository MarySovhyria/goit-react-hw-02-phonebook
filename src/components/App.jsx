import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';
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
