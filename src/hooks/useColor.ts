import { useContext } from "react";
import { ColorContext } from "../contexts/Color";

const useColor = () => useContext(ColorContext);

export default useColor;
