import { Action } from "redux";

interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

interface Recipe {
  id: string;
  name: string;
  ingredients: Ingredient[];
}

interface Ingredient {
  id: string;
  name: string;
}

interface Action extends Action {
  type: string;
  payload?: any;
}
