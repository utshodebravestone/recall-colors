import { useState } from "react";
import ColorList from "./ColorList";
import _colors from "../data/colors";
import ColorType from "./Color/types";
import AddColor from "./AddColor";
// import Menu from "./Menu";
// import _recipes from "../data/recipes";

const App = () => {
  // const [recipes, setRecipes] = useState(_recipes);
  const [colors, setColors] = useState(_colors);

  const onAddColor = (color: ColorType) =>
    setColors((colors) => [...colors, color]);

  const onColorChange = (color: ColorType): void =>
    setColors((colors) =>
      colors.map((_color) => (color.id == _color.id ? color : _color))
    );

  const onDelete = (id: number): void =>
    setColors((colors) => colors.filter((color) => color.id != id));

  // const onRatingChange = (rating: number, name: string): void => {
  //   setRecipes((recipes) =>
  //     recipes.map((recipe) =>
  //       recipe.name == name ? { ...recipe, rating: rating } : recipe
  //     )
  //   );
  // };

  return (
    <div className="min-h-screen min-w-screen">
      <AddColor onAddColor={onAddColor} />
      <ColorList
        colors={colors}
        onColorChange={onColorChange}
        onDelete={onDelete}
      />
      {/* <Menu
        title="Delicious Recipes"
        recipes={recipes}
        onRatingChange={onRatingChange}
      /> */}
    </div>
  );
};

export default App;
