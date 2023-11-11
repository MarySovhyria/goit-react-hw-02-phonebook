import { useState } from 'react';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../redux/Store/operation';
import { selectContacts } from 'redux/Store/Selectors/selctors';


const ContactForm = ({ onSubmit }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: name,
      number: number,
    };

    const isContactExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase())

    if (isContactExist) {
      Notiflix.Report.warning(
        'Alert',
        `Contact with name ${contact.name} already exists!`,
        'Ok'
      );
      return;
    }

const isNumberExist = contacts.find(
  (contact) =>
    contact.number &&
    contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
);

    if (isNumberExist) {
      Notiflix.Report.warning(
        'Alert',
        `Number ${contact.number} is already in contacts!`,
        'Ok'
      );
      return;
    }

    dispatch(addContacts(contact));
    setName('');
    setNumber('');
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