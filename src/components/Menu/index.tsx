import { FC } from "react";
import RecipeType from "../Recipe/types";
import Recipe from "../Recipe";

const Menu: FC<{
  title: string;
  recipes: RecipeType[];
  onRatingChange: (rating: number, name: string) => void;
}> = ({ title, recipes, onRatingChange }) => (
  <article className="m-5">
    <h1 className="text-5xl font-semibold text-center">{title}</h1>
    <div className="mt-5 flex flex-col items-center">
      {recipes.map((recipe, i) => (
        <Recipe recipe={recipe} onRatingChange={onRatingChange} key={i} />
      ))}
    </div>
  </article>
);

export default Menu;
