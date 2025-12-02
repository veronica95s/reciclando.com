import { useState } from 'react';
import styles from './Categories.module.css';

const MATERIALS = [
  'Plástico',
  'Papel',
  'Metal',
  'Vidro',
  'Eletrônicos',
  'Baterias',
];

export default function Categories({ onCategoriesChange }) {
  const [allOption, setAllOption] = useState(true);
  const [categories, setCategories] = useState(MATERIALS.map(() => false));

  function handleSelectAll() {
    setAllOption(true);
    setCategories(MATERIALS.map(() => false));
    onCategoriesChange([]);
  }

  function handleCategoryChange(idx) {
    setAllOption(false);

    const update = [...categories];
    update[idx] = !update[idx];
    setCategories(update);

    onCategoriesChange(getSelectedCategories(update));
  }

  function getSelectedCategories(categories) {
    const selectedCategories = [];
    categories.forEach((checked, idx) => {
      if (checked) {
        selectedCategories.push(MATERIALS[idx]);
      }
    });
    return selectedCategories;
  }

  return (
    <div className='d-flex flex-wrap gap-2 mb-4 align-items-center'>
      <span className={styles['category-item']}>
        <input
          type='checkbox'
          id='optDefault'
          checked={allOption}
          onChange={handleSelectAll}
        />
        <label htmlFor='optDefault'>Todos</label>
      </span>

      {MATERIALS.map((material, idx) => (
        <span className={styles['category-item']} key={idx}>
          <input
            type='checkbox'
            name='categoriesList'
            id={'opt' + idx}
            checked={categories[idx]}
            onChange={() => handleCategoryChange(idx)}
          />
          <label htmlFor={'opt' + idx}>{material}</label>
        </span>
      ))}
    </div>
  );
}
