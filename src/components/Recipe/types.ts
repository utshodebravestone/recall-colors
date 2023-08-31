import IngredientType from "../Ingredient/types";

export default interface RecipeType {
  name: string;
  ingredients: IngredientType[];
  steps: string[];
}
