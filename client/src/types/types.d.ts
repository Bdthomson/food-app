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
