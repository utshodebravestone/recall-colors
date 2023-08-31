import { FC } from "react";
import RecipeType from "./types";
import Ingredient from "../Ingredient";
import Rating from "../Rating";

const Recipe: FC<{
  recipe: RecipeType;
  onRatingChange: (rating: number, name: string) => void;
}> = ({ recipe, onRatingChange }) => {
  const { name, ingredients, steps, rating, maxRating } = recipe;

  return (
    <section className="my-4 p-5 flex flex-col items-center justify-center bg-slate-100 rounded-sm shadow-lg min-w-[90vw] sm:min-w-[750px]">
      <h1 className="text-3xl font-light">{name}</h1>
      <Rating
        rating={rating}
        maxRating={maxRating}
        onRatingChange={(rating: number) => onRatingChange(rating, name)}
      />
      <ul className="w-full mt-5 px-0 sm:px-16">
        <h1 className="text-2xl font-light mb-2">Ingredients</h1>
        {ingredients.map((ingredient, i) => (
          <li key={i}>
            <Ingredient ingredient={ingredient} />
          </li>
        ))}
      </ul>
      <ol className="mt-5 list-decimal w-full px-0 sm:px-16">
        <h1 className="text-2xl font-light mb-2">Cooking Instruction</h1>
        {steps.map((step, i) => (
          <li className="font-light" key={i}>
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Recipe;
