import { FC } from "react";

import AddColor from "../components/AddColor";
import ColorList from "../components/ColorList";

const Home: FC = () => (
  <>
    <AddColor />
    <ColorList colors={null} />
  </>
);

export default Home;
