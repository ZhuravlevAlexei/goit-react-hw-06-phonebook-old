import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import {
  selectFilter,
  updateFilter,
} from 'components/Redux/contactsAndFilterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <label className={css.contactLabel}>
      Find contacts by name
      <input
        className={css.contactInput}
        type="text"
        name="filter"
        value={filter}
        onChange={evt => dispatch(updateFilter(evt.currentTarget.value.trim()))}
      />
    </label>
  );
};

export default Filter;
