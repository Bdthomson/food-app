import { FETCH_RECIPES } from "../actions";
import { Action } from "../types";

export default function(state = {}, action: Action) {
  console.log("Action: ", action);
  switch (action.type) {
    case FETCH_RECIPES:
      state = {
        ...state,
        recipes: action.payload
      };

    default:
      return state;
  }
}
