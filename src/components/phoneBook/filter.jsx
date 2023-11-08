import { useDispatch, useSelector } from 'react-redux';
import { setFilter, filterReducer } from '../../redux/Store/Slices/FilterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

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