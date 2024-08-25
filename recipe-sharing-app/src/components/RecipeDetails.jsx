import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function RecipeDetails() {
  const { id } = useParams();
  const { recipes } = useRecipeStore();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      {/* Add more details here, like ingredients and instructions */}
    </div>
  );
}

export default RecipeDetails;