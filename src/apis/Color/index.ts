import ColorType from "../../components/Color/types";

const LOCAL_STORAGE_KEY = "colors";

export const getColorsFromLocalStorage = (): ColorType[] =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");

export const setColorsToLocalStorage = (colors: ColorType[]) =>
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(colors));
