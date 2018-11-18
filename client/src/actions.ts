import axios from "axios";
import { AnyAction, Dispatch } from "redux";

export const FETCH_RECIPES = "FETCH_RECIPES";
export const fetchRecipeRequest = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    axios
      .get("/api/recipes")
      .then(res => dispatch({ type: FETCH_RECIPES, payload: res.data.recipes }));
  };
};
