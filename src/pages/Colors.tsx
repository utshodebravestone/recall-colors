import { FC } from "react";

import AddColor from "../components/AddColor";
import ColorList from "../components/ColorList";

const Colors: FC = () => (
  <>
    <div className="py-2 w-full flex flex-col justify-center items-center gap-4">
      <h1 className="font-light text-5xl">Saved Colors</h1>
      <div className="w-3/4 border-b border-slate-200"></div>
    </div>
    <ColorList />
    <AddColor />
  </>
);

export default Colors;
