import React from 'react';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';


const App = () => {



  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />
        <div>
        <h2>Contacts</h2>
       
            <Filter />
         
            <ContactList/>
        </div>
    </div>
  );
};

export default App;
