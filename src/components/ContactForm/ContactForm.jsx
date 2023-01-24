import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactForm.module.css';
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'redux/operations/contactsThunk';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isAtContacts = contacts.some(contact => contact.name === userData.name);
    if (isAtContacts) {
      alert('Already in Contacts');
      return;
    }
    const newContact = { ...userData };
    dispatch(addContactsThunk(newContact));

    e.target.reset();
  };

  return (
    <div className={css.form}>
      <form onSubmit={handleSubmit}>
        <div className={css.box}>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>Name</label>
        </div>
        <div className={css.box}>
          <input
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <label>Number</label>
        </div>
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add contact
        </button>
      </form>
    </div>
  );
}
ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
};