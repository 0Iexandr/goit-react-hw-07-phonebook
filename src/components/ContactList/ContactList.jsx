import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/contacts/selectors';
import { deleteContactsThunk } from 'redux/operations/contactsThunk';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilterContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button
            className={css.btn}
            type="button"
            onClick={() => dispatch(deleteContactsThunk(id))}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};