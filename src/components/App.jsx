import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/operations/contactsThunk';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(getContactsThunk())
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <h2 className={css.subtitle}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p className={css.emptylist}>Please, add contact!</p>
      )}
    </div>
  );
}
