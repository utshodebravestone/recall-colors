import { FC } from "react";
import Color from "../Color";
import useColor from "../../hooks/useColor";

const ColorList: FC = () => {
  const { colors } = useColor();

  return (
    <ul className="py-4 min-h-fit w-full flex flex-col items-center justify-start gap-5">
      {colors.length > 0 ? (
        colors.map((color, i) => <Color color={color} key={i} />)
      ) : (
        <p className="text-center text-xl font-light">
          You don't have any color saved.
          <br />
          Click on the `+` icon to add one.
        </p>
      )}
    </ul>
  );
};

export default ColorList;
