import { recipes } from './recipes.js';


function listarRecetas() {
  return recipes.map(recipe => (
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  ));
}



export default function RecipeList() {
  return (
    <div>
      <h1>Recetas</h1>
      {listarRecetas()}
    </div>
  );
}
