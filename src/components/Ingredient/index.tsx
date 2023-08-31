import { FC } from "react";
import IngredientType from "./types";

const Ingredient: FC<{ ingredient: IngredientType }> = ({ ingredient }) => {
  const { name, amount, measurement } = ingredient;

  return (
    <div className="flex items-center justify-between">
      <p className="font-light">{name}</p>
      <p className="font-light">
        {amount} {measurement}
      </p>
    </div>
  );
};

export default Ingredient;
