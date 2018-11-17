import React from "react";

interface Props {
  recipes: Recipe[];
}

export default function Recipes(props: Props) {
  return (
    <div>
      <h1>Recipes</h1>
      <button className="ui button">Create Recipe</button>
      <ul>
        {props.recipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}
