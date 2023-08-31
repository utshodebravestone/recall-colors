import Menu from "./Menu";
import _recipes from "../data/recipes";
import { useState } from "react";

const App = () => {
  const [recipes, setRecipes] = useState(_recipes);

  const onRatingChange = (rating: number, name: string): void => {
    console.log(name, rating);
    setRecipes((recipes) =>
      recipes.map((recipe) =>
        recipe.name == name ? { ...recipe, rating: rating } : recipe
      )
    );
  };

  return (
    <>
      <Menu
        title="Delicious Recipes"
        recipes={recipes}
        onRatingChange={onRatingChange}
      />
    </>
  );
};

export default App;
