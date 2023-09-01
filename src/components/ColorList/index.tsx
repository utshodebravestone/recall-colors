import { FC } from "react";
import Color from "../Color";
import useColor from "../../hooks/useColor";
import ColorType from "../Color/types";

const ColorList: FC<{ colors: ColorType[] | null }> = (props) => {
  const colorContext = useColor();
  const colors = props.colors ?? colorContext.colors;

  return (
    <ul className="py-5 min-h-fit w-full flex flex-col items-center justify-start gap-5">
      {colors.length > 0 ? (
        colors.map((color, i) => <Color color={color} key={i} />)
      ) : (
        <h1 className="text-4xl font-light">No Colors Listed!</h1>
      )}
    </ul>
  );
};

export default ColorList;
