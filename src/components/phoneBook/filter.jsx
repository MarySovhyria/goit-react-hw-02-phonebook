const Filter = ({ value, onChange }) => (
    <label >
      Find contacts by name
      <input
        type="text"
        name="filter"
        title="Enter search name"
        onChange={onChange}
        value={value}
      />
    </label>
  );
  
  export default Filter;