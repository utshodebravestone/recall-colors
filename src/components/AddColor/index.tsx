import { FC, useState } from "react";
import ColorType from "../Color/types";
import ColorForm from "../ColorForm";
import random from "../../utils/random";
import useColor from "../../hooks/useColor";
import { FaPlus } from "react-icons/fa";

const AddColor: FC = () => {
  const color: ColorType = {
    id: random(),
    name: "black",
    value: "#000000",
    rating: 0,
    maxRating: 5,
  };
  const { onAddColor } = useColor();
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="w-full py-5 flex flex-col justify-center items-center">
      <button
        onClick={() => setModalActive(true)}
        className="p-4 bg-blue-600 text-white font-bold text-xl rounded-md border border-blue-600 hover:opacity-80 transition-opacity duration-500"
      >
        <FaPlus />
      </button>
      {modalActive && (
        <ColorForm
          initialColor={color}
          onAddColor={(color: ColorType) => {
            setModalActive(false);
            onAddColor(color);
          }}
          onCancel={() => setModalActive(false)}
        />
      )}
    </div>
  );
};

export default AddColor;
