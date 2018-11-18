import express from "express";

const app = express();

const recipes = [
  {
    id: "1",
    imgUrl: "https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg",
    ingredients: ["Greek Yogurt", "Honey", "Nuts"],
    name: "Greek Yogurt with Nuts"
  },
  {
    id: "2",
    imgUrl: "",
    ingredients: ["Hamburger Patty", "Cheese", "Bun"],
    name: "Burger"
  }
];

app.get("/api/recipes", (req, res) => {
  res.json({ count: recipes.length, recipes });
});

export default app;
