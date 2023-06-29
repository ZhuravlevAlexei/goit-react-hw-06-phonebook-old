import { useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/contactsAndFilterSlice';

import PropTypes from 'prop-types';
import css from './ContactElement.module.css';

const ContactElement = ({ contactsCash }) => {
  const dispatch = useDispatch();

  return contactsCash.map(elm => {
    return (
      <li key={elm.id} className={css.contItem}>
        {elm.name}: {elm.number}
        <button
          className={css.delButton}
          type="button"
          onClick={() => dispatch(deleteContact(elm.id))}
        >
          Delete
        </button>
      </li>
    );
  });
};

ContactElement.propTypes = {
  contactsCash: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactElement;
