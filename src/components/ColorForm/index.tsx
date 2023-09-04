import { FC, useState } from "react";
import ColorType from "../Color/types";
import Rating from "../Rating";

const ColorForm: FC<{
  initialColor: ColorType;
  onAddColor: (color: ColorType) => void;
  onCancel: () => void;
}> = ({ initialColor, onAddColor, onCancel }) => {
  const [color, setColor] = useState(initialColor);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-50 p-10 flex flex-col items-start justify-center gap-4 bg-white rounded"
      >
        <div className="flex flex-col gap-1">
          <label className="text-xl font-light">Set a Name</label>
          <input
            autoFocus
            required
            maxLength={15}
            type="text"
            value={color.name}
            onChange={(e) =>
              setColor((color) => ({
                ...color,
                name: e.target.value.toLowerCase(),
              }))
            }
            className="p-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xl font-light">Pick a Color</label>
          <input
            type="color"
            value={color.value}
            onChange={(e) =>
              setColor((color) => ({ ...color, value: e.target.value }))
            }
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xl font-light">Give a Rating</label>
          <Rating
            rating={color.rating}
            maxRating={color.maxRating}
            onRatingChange={(rating) =>
              setColor((color) => ({ ...color, rating }))
            }
          />
        </div>
        <div className="mt-2 w-full flex justify-between">
          <button
            onClick={() => {
              onAddColor(color);
            }}
            className="px-6 py-2 bg-green-600 text-white font-bold rounded-md border border-green-600 hover:bg-transparent hover:text-green-600 transition-colors duration-500"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-2 bg-red-500 text-white font-bold rounded-md border border-red-500 hover:bg-transparent hover:text-red-500 transition-colors duration-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ColorForm;
