import { useDispatch } from 'react-redux';
import { setCategoryFilter, setAuthorFilter } from '../features/books/booksSlice';

const Filters = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (e) => dispatch(setCategoryFilter(e.target.value));
  const handleAuthorChange = (e) => dispatch(setAuthorFilter(e.target.value));

  return (
    <div>
      <h2>Filters</h2>
      <div>
        <label>Category:</label>
        <input type="text" onChange={handleCategoryChange} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" onChange={handleAuthorChange} />
      </div>
    </div>
  );
};

export default Filters;
