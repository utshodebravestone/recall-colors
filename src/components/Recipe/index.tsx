import { FC } from "react";
import RecipeType from "./types";
import Ingredient from "../Ingredient";

const Recipe: FC<{ recipe: RecipeType }> = ({ recipe }) => {
  const { name, ingredients, steps } = recipe;

  return (
    <section className="my-4 p-5 flex flex-col items-center justify-center bg-slate-100 rounded-sm shadow-lg">
      <h1 className="text-3xl font-semibold">{name}</h1>
      <ul className="w-full mt-5 px-40">
        <h1 className="text-2xl font-semibold mb-2">Ingredients</h1>
        {ingredients.map((ingredient, i) => (
          <li key={i}>
            <Ingredient ingredient={ingredient} />
          </li>
        ))}
      </ul>
      <ol className="mt-5 list-decimal w-full px-40">
        <h1 className="text-2xl font-semibold mb-2">Steps</h1>
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </section>
  );
};

export default Recipe;
