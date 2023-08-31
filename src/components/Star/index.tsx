import { FC } from "react";
import { FaStar } from "react-icons/fa";

const Star: FC<{
  id: number;
  color: string;
  onClick: (id: number) => void;
}> = ({ id, color, onClick }) => (
  <button onClick={() => onClick(id)}>
    <FaStar color={color} size="30" />
  </button>
);

export default Star;
