import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleChangeNumber = (e) => {
    this.setState({ number: e.target.value });
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, contacts, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a contact name and number.');
      return;
    }

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in the phonebook.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, name, number, filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phone Book</h1>

        <ContactForm
          name={name}
          number={number}
          onChangeName={this.handleChangeName}
          onChangeNumber={this.handleChangeNumber}
          onSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}

function ContactForm({ name, number, onChangeName, onChangeNumber, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={onChangeName} required />
      </label>
      <label>
        Number:
        <input type="tel" name="number" value={number} onChange={onChangeNumber} required />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}

function Filter({ value, onChange }) {
  return (
    <input type="text" placeholder="Search by name" value={value} onChange={onChange} />
  );
}

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
}

function ContactItem({ contact, onDeleteContact }) {
  return (
    <li>
      {contact.name} - {contact.number}
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  );
}

export default App;
