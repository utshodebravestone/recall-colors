import ColorType from "../components/Color/types";
import random from "../utils/random";

const colors: ColorType[] = [
  {
    id: random(),
    name: "ocean at dusk",
    value: "#00c4e2",
    rating: 5,
    maxRating: 5,
  },
  {
    id: random(),
    name: "bright red",
    value: "#ff0000",
    rating: 1,
    maxRating: 5,
  },
  {
    id: random(),
    name: "lawn",
    value: "#26ac56",
    rating: 3,
    maxRating: 5,
  },
];

export default colors;
