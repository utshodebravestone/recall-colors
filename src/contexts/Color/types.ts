import ColorType from "../../components/Color/types";

export default interface ColorContextType {
  colors: ColorType[];
  onAddColor: (color: ColorType) => void;
  onColorChange: (color: ColorType) => void;
  onDelete: (id: number) => void;
}
