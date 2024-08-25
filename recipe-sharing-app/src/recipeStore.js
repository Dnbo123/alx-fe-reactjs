import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (query) => set({ searchTerm: query }),
  getFilteredRecipes: () => {
    const { recipes, searchTerm } = useRecipeStore.getState();
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));

export default useRecipeStore;