import { FC, useState } from "react";
import ColorType from "../Color/types";
import ColorForm from "../ColorForm";
import random from "../../utils/random";
import useColor from "../../hooks/useColor";

const AddColor: FC = () => {
  const color: ColorType = {
    id: random(),
    name: "white",
    value: "#ffffff",
    rating: 0,
    maxRating: 5,
  };
  const { onAddColor } = useColor();
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="w-full py-5 flex flex-col justify-center items-center">
      <button
        onClick={() => setModalActive(true)}
        className="px-8 py-4 bg-blue-500 text-white font-bold text-xl rounded-md border border-blue-500 hover:bg-transparent hover:text-blue-500 transition-colors duration-500"
      >
        Add a Color
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
