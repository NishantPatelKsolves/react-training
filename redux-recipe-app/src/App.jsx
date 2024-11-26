import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { add, removeById } from './features/recipesSlice';

function App() {
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('northIndian');
  const [editId, setEditId] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const recipies = useSelector((state) => state.recipies.value);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ingredients || !instructions || !category) {
      console.log('All fields are mandatory');
      return;
    }
    if (editId) {
      const updatedRecipe = {
        id: editId,
        ingredients,
        instructions,
        category,
      };
      // Update the recipe in the state
      const updatedRecipes = recipies.map((recipe) =>
        recipe.id === editId ? updatedRecipe : recipe
      );
      dispatch({ type: 'recipies/setRecipes', payload: updatedRecipes });
      setEditId(null);
    } else {
      const newRecipe = {
        id: Date.now(),
        ingredients,
        instructions,
        category,
      };
      dispatch(add(newRecipe));
    }
    setIngredients('');
    setInstructions('');
    setCategory('northIndian');
  };

  const handleRecipeRemove = (id) => {
    dispatch(removeById(id));
  };

  const handleRecipeEdit = (recipe) => {
    setEditId(recipe.id);
    setIngredients(recipe.ingredients);
    setInstructions(recipe.instructions);
    setCategory(recipe.category);
  };

  const filteredRecipes =
    filterCategory === 'all'
      ? recipies
      : recipies.filter((recipe) => recipe.category === filterCategory);

  return (
    <>
      <div>
        <h1>Recipe App</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="ingredients">Ingredients: </label>
          <input
            type="text"
            name="ingredients"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="instructions">Instructions: </label>
          <input
            type="text"
            name="instructions"
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="category">
            Category:
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="northIndian">North Indian</option>
              <option value="southIndian">South Indian</option>
              <option value="italian">Italian</option>
              <option value="continental">Continental</option>
            </select>
          </label>
          <br />
          <br />
          <button>{editId ? 'Save' : 'Add'}</button>
        </form>
        <br />
        <label htmlFor="filterCategory">
          Filter by Category:
          <select
            name="filterCategory"
            id="filterCategory"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="northIndian">North Indian</option>
            <option value="southIndian">South Indian</option>
            <option value="italian">Italian</option>
            <option value="continental">Continental</option>
          </select>
        </label>
        <br />
        <div>
          {filteredRecipes.map((recipe, i) => (
            <div key={recipe.id}>
              <h4>Recipe: {i + 1}</h4>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Instructions: {recipe.instructions}</p>
              <p>Category: {recipe.category}</p>
              <button onClick={() => handleRecipeEdit(recipe)}>Edit</button>
              <button onClick={() => handleRecipeRemove(recipe.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
