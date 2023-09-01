import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SortColors from "../pages/SortColors";
import NotFound from "../pages/NotFound";
import Navigation from "./Navigation";
import ColorProvider from "../contexts/Color";

const App = () => {
  return (
    <>
      <Navigation />
      <ColorProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sort" element={<SortColors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ColorProvider>
    </>
  );
};

export default App;
