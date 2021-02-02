import { useSelector, useDispatch } from 'react-redux';
import { getFilter, filterContacts } from '../../redux/contacts/';

import FilterStl from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = e => dispatch(filterContacts(e.target.value));
  return (
    <div className={FilterStl.filterContainer}>
      <label className={FilterStl.label}>
        Find contact by name:
        <input
          type="text"
          value={filter}
          onChange={onChangeFilter}
          name="filter"
          className={FilterStl.input}
        />
      </label>
    </div>
  );
}
