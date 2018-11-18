import React from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../types";

interface Props {
  recipes: Recipe[];
}

export default function Recipes(props: Props) {
  console.log("Props: ", props);
  return (
    <div>
      <h1>Recipes</h1>
      <Link className="ui button" to="/recipes/new">
        New Recipe
      </Link>
      <ul>
        {props.recipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}
