import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Navigation from "./Navigation";
import ColorProvider from "../contexts/Color";
import Colors from "../pages/Colors";

const App = () => {
  return (
    <>
      <Navigation />
      <ColorProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ColorProvider>
    </>
  );
};

export default App;
