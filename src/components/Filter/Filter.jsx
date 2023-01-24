import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.form}>
      <form>
        <div className={css.box}>
          <input
            type='text'
            onChange={e => dispatch(filterContacts(e.target.value))}
          />
          <label>Find contacts by name</label>
        </div>
      </form>
    </div>
  );
};

Filter.propTypes = {
  onInputChange: PropTypes.func,
};