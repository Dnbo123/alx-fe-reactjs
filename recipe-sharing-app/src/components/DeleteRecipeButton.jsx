import useRecipeStore from './recipeStore';

function DeleteRecipeButton({ id }) {
  const { deleteRecipe } = useRecipeStore();

  const handleDelete = () => {
    deleteRecipe(id);
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteRecipeButton;