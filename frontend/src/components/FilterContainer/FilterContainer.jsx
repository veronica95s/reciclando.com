import Categories from './Categories';
import CustomSelect from './LocationSelect';
import SearchBar from './SearchBar';

export default function FilterContainer({
  placeholder,
  onSearchChange,
  onStateChange,
  onCategoriesChange,
}) {
  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <SearchBar placeholder={placeholder} onSearchChange={onSearchChange} />
      <CustomSelect onStateChange={onStateChange} />
      <Categories onCategoriesChange={onCategoriesChange} />
    </div>
  );
}
