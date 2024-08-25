import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const [searchQuery, setSearchQuery] = useState('');
  const [ingredientFilter, setIngredientFilter] = useState('');
  const { setSearchQuery, setIngredientFilter } = useRecipeStore();

  return (
    <div>
     <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <input
        type="text"
        placeholder="Filter by ingredient"
        value={ingredientFilter}
        onChange={(e) => setIngredientFilter(e.target.value)}
      />
 
    </div>
    );
};