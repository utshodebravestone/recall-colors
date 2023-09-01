import { FC } from "react";
import Color from "../Color";
import useColor from "../../hooks/useColor";

const ColorList: FC = () => {
  const { colors } = useColor();

  return (
    <ul className="py-10 h-full w-full flex flex-col items-center justify-center gap-5">
      {colors.length > 0 ? (
        colors.map((color, i) => <Color color={color} key={i} />)
      ) : (
        <h1 className="text-4xl font-light">No Colors Listed!</h1>
      )}
    </ul>
  );
};

export default ColorList;
