import RecipeType from "../components/Recipe/types";

const recipes: RecipeType[] = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "l lb" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" },
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the yellow squash and place in the oven for 30 minutes.",
      "Add the salmon, garlic and pine nuts to the dish.",
      "Bake for 15 minutes",
      "Remove from oven.",
      "Add the lettuce and serve.",
    ],
  },
  {
    name: "FIsh Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "l lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Icebergs Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" },
    ],
    steps: [
      "Cook the fish on the grill until cooked through.",
      "Place the fish on he 3 tortillas.",
      "Top them with lettuce, tomatoes and cheese.",
    ],
  },
];

export default recipes;
