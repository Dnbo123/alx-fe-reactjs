import { useRecipeStore } from './recipeStore';

function RecipeList() {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;