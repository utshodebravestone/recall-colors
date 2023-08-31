import { FC } from "react";
import Star from "../Star";

const Rating: FC<{
  rating: number;
  maxRating: number;
  onRatingChange: (rating: number) => void;
}> = ({ rating, maxRating, onRatingChange }) => (
  <div className="mt-2 bg-transparent flex flex-col items-center">
    <div className="flex">
      {[...Array(maxRating)].map((_, i) => (
        <Star
          id={i + 1}
          color={i < rating ? "red" : "black"}
          onClick={(id: number) => onRatingChange(id)}
          key={i}
        />
      ))}
    </div>
    <p className="mt-1 font-light">
      Rated {rating} of {maxRating}
    </p>
  </div>
);

export default Rating;
