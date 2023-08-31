import { FC } from "react";
import ColorType from "../Color/types";
import Color from "../Color";

const ColorList: FC<{
  colors: ColorType[];
  onColorChange: (color: ColorType) => void;
  onDelete: (id: number) => void;
}> = ({ colors, onColorChange, onDelete }) => (
  <ul className="py-10 h-full w-full flex flex-col items-center justify-center gap-5">
    {colors.length > 0 ? (
      colors.map((color, i) => (
        <Color
          color={color}
          onColorChange={onColorChange}
          onDelete={onDelete}
          key={i}
        />
      ))
    ) : (
      <h1 className="text-4xl font-light">No Colors Listed!</h1>
    )}
  </ul>
);

export default ColorList;
