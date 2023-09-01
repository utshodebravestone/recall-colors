import { FC } from "react";

import ColorList from "../components/ColorList";

import useColor from "../hooks/useColor";

const SortColors: FC = () => {
  const { colors } = useColor();

  return <ColorList colors={colors.sort((a, b) => b.rating - a.rating)} />;
};

export default SortColors;
