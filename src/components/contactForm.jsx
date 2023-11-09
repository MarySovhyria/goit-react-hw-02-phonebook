import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../redux/Store/Slices/ContactsSlice';
import { getContacts } from 'redux/Store/Selectors/selctors';


const ContactForm = ({ onSubmit }) => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
   event.preventDefault();
     if (contacts.some(contact => contact.name === name)) {
    window.alert(`${name} is already in your contacts`);
    return;
  }
   dispatch(addContacts({
     id: nanoid(),
     name,
     number
   }))
    setName('');
    setNumber('')
  };

  const handleChange = e => {
   const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
            autoFocus
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>

        <button type="submit">
          add contact
        </button>
      </form>
    );
  };

export default ContactForm;