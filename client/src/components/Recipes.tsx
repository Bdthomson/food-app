import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { Recipe } from "../types";
import RecipeView from "./RecipeView";

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
      <br />
      <br />
      <div className="ui cards">
        {props.recipes.map(recipe => (
          <RecipeView key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
}
