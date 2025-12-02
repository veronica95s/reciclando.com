import FilterContainer from '../components/FilterContainer/FilterContainer';
import Card from '../components/Ads/Card';
import { useState } from 'react';

const Ads = () => {
  const [ads] = useState([
    {
      title: 'Old Newspaper',
      description: 'Bundle of old newspapers available for recycling.',
      donorName: 'John Doe',
      donorContact: '1234567890',
      donorLocation: 'São Paulo - SP',
      categories: ['Papel', 'Papelão'],
      createdAt: '2025-11-29, 14:02',
    },
    {
      title: 'Plastic Bottles',
      description: 'Collection of used plastic bottles.',
      donorName: 'John Doe',
      donorContact: '1234567890',
      donorLocation: 'São Paulo - SP',
      categories: ['Plástico'],
      createdAt: '2025-11-29, 14:02',
    },
    {
      title: 'Glass Jars',
      description: 'Several glass jars ready for recycling.',
      donorName: 'John Doe',
      donorContact: '1234567890',
      donorLocation: 'Belo Horizonte - MG',
      categories: ['Vidro'],
      createdAt: '2025-11-29, 14:02',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [state, setState] = useState('São Paulo');

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onCategoriesChange = (categories) => {
    setFilteredCategories(categories);
  };

  const onStateChange = (state) => {
    setState(state);
  };

  const filteredAds = ads.filter((ad) => {
    const title = (ad.title || '').toLowerCase();
    const description = (ad.description || '').toLowerCase();
    const donorLocation = (ad.donorLocation || '').toLowerCase();
    const adCategories = ad.categories || [];

    const search = searchTerm.toLowerCase();
    const categories = filteredCategories;
    const currentState = (state || '').toLowerCase();

    const matchesSearch =
      !search || title.includes(search) || description.includes(search);

    const matchesCategories =
      categories.length === 0 ||
      categories.every((c) => adCategories.includes(c));

    const matchesState = !currentState || donorLocation.includes(currentState);

    return matchesSearch && matchesCategories && matchesState;
  });

  return (
    <div>
      <h1>Anúncios Disponíveis</h1>
      <p style={{ marginBottom: '2rem' }}>
        Encontre materiais recicláveis disponíveis para coleta na sua região
      </p>
      <FilterContainer
        placeholder='Buscar por título ou palavra-chave...'
        onSearchChange={onSearchChange}
        onStateChange={onStateChange}
        onCategoriesChange={onCategoriesChange}
      />
      <p className='mb-4'>{filteredAds.length} anúncios encontrados</p>
      {filteredAds.map((ad, idx) => (
        <Card key={idx} {...ad} />
      ))}
    </div>
  );
};

export default Ads;
