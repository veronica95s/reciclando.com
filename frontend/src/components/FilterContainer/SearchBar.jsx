import { Search } from 'lucide-react';
import styles from './SearchBar.module.css';

export default function SearchBar({ placeholder, onSearchChange }) {
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      onSearchChange(event);
    }
  }

  function handleClear(event) {
    if (event.target.value === '') {
      onSearchChange(event);
    }
  }

  return (
    <div className={`${styles['search-container']} mb-3`}>
      <Search color='#555' size={18} />
      <input
        className={`${styles['form-control']} me-2`}
        type='search'
        placeholder={placeholder}
        aria-label='Search'
        onKeyDown={handleKeyDown}
        onChange={handleClear}
      ></input>
    </div>
  );
}
