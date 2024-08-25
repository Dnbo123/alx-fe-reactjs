import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function RecipeDetails() {
  const { id } = useParams(); // Extracting recipe ID from URL parameters
  const { recipes } = useRecipeStore();

  // Finding the recipe with the matching ID from the recipes array
  const recipe = recipes.find((r) => recipe.id === id);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2> // Use recipe.title for display
      <p>{recipe.description}</p>
      {/* Add more details here, like ingredients and instructions */}
    </div>
  );
}

export default RecipeDetails;