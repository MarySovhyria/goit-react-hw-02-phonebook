import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/Store/Slices/FilterSlice';
import { selectFilters } from 'redux/Store/Selectors/selctors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const onChange = e => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <label >
        Find contacts by name
        <input
          type="text"
          name="filter"
          title="Enter search name"
          onChange={onChange}
          value={filter}
        />
    </label>)
}


  
  export default Filter;