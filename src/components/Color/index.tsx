import { FC, useState } from "react";
import ColorType from "./types";
import Rating from "../Rating";
import { FaEdit, FaTrash } from "react-icons/fa";
import ColorForm from "../ColorForm";
import useColor from "../../hooks/useColor";

const Color: FC<{
  color: ColorType;
}> = ({ color }) => {
  const { id, name, value, rating, maxRating } = color;
  const { onColorChange, onDelete } = useColor();
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-w-[400px] bg-slate-50 p-6 rounded shadow-md">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-light">{name}</h1>
        <div className="flex items-center gap-2">
          <button
            className="mt-2 cursor-pointer"
            onClick={() => setModalActive(true)}
          >
            <FaEdit size="24" />
          </button>
          <button className="mt-2 cursor-pointer" onClick={() => onDelete(id)}>
            <FaTrash size="24" />
          </button>
        </div>
      </div>
      <div
        className="mt-2 h-10 w-full border border-slate-200 rounded"
        style={{ backgroundColor: value }}
      />
      <Rating
        rating={rating}
        maxRating={maxRating}
        onRatingChange={(rating: number) => onColorChange({ ...color, rating })}
      />
      {modalActive && (
        <ColorForm
          initialColor={color}
          onAddColor={(color) => {
            setModalActive(false);
            onColorChange(color);
          }}
          onCancel={() => {
            setModalActive(false);
          }}
        />
      )}
    </div>
  );
};

export default Color;
