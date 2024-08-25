import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';

function App() {
  return (
    <div className="App">
    <h1>Recipe Sharing App</h1>
    <AddRecipeForm />
    <RecipeList />
  </div>
  );
}

export default App;