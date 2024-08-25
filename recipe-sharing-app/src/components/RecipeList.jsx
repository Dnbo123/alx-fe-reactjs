import React from 'react';
import useRecipeStore from './recipeStore';

function RecipeList() {
  const { recipes, searchQuery, getFilteredRecipes } = useRecipeStore();

  const filteredRecipes = getFilteredRecipes();

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;