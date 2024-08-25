import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchQuery: '',
  ingredientFilter: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  setIngredientFilter: (filter) => set({ ingredientFilter: filter }),
  getFilteredRecipes: () => {
    const { recipes, searchQuery, ingredientFilter } = useRecipeStore.getState();
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(ingredientFilter.toLowerCase())
      )
    );
  },
}));

export default useRecipeStore;