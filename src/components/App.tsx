import Menu from "./Menu";
import recipes from "../data/recipes";

const App = () => {
  return (
    <>
      <Menu title="Delicious Recipes" recipes={recipes} />
    </>
  );
};

export default App;
