import { getContacts } from 'redux/Store/Selectors/selctors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteContacts } from 'redux/Store/Slices/ContactsSlice';
import { useDispatch } from 'react-redux';
import { getFilters } from 'redux/Store/Selectors/selctors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilters);

  const normalizeFilter = filtered.toLowerCase();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );


  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}:</span>
          <span>{number}</span>
          <button
            type="button"
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;