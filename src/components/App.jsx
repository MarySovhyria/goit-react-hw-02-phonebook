import { Component } from 'react';
import ContactForm from './phoneBook/contactForm';
import ContactList from './phoneBook/contactList';
import Filter from './phoneBook/filter';

class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')),
    filter: '',
  };

  handleAddNewContact = newContact => {
    const { contacts } = this.state;
  
    const matchName = contacts.some(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    );
  
    if (matchName) {
      return alert(`${newContact.name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();


    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );

    return filteredContacts;
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleAddNewContact}
    
        />

        {contacts.length > 0 && (
          <div>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
            {visibleContacts.length > 0 ? (
              <ContactList
                visibleContacts={visibleContacts}
                onDeleteContact={this.handleDeleteContact}
              />
            ) : (
              <p>No contacts match the filter.</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;