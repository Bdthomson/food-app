import React from "react";
import { Link } from "react-router-dom";

interface Props {
  recipes: Recipe[];
}

export default function Recipes(props: Props) {
  return (
    <div>
      <h1>Recipes</h1>
      <Link className="ui button" to="/recipes/new">
        Create Recipe
      </Link>
      <ul>
        {props.recipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}
