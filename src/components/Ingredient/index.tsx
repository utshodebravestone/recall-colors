import { FC } from "react";
import IngredientType from "./types";

const Ingredient: FC<{ ingredient: IngredientType }> = ({ ingredient }) => {
  const { name, amount, measurement } = ingredient;

  return (
    <div className="flex items-center justify-between min-w-[300px]">
      <p>{name}</p>
      <p>
        {amount} {measurement}
      </p>
    </div>
  );
};

export default Ingredient;
