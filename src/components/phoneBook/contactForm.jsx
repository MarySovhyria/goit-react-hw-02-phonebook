import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/Store/Slices/ContactsSlice';
import { getContacts } from 'redux/Store/Selectors/selctors';


const ContactForm = ({ onSubmit }) => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = event => {
   event.preventDefault();
     if (contacts.some(contact => contact.name === contactName)) {
    window.alert(`${contactName} is already in your contacts`);
    return;
  }
   dispatch(addContacts({
     id: nanoid(),
     name: contactName,
     number: contactNumber
   }))
  };

  const handleChange = e => {
   const { value, name } = e.target;

    switch (name) {
      case 'name':
        setContactName(value);
        break;
      case 'number':
        setContactNumber(value);
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
            value={contactName}
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
            value={contactNumber}
          />
        </label>

        <button type="submit">
          add contact
        </button>
      </form>
    );
  };

export default ContactForm;