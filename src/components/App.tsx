import ColorList from "./ColorList";
import AddColor from "./AddColor";
import ColorProvider from "../contexts/Color";

const App = () => {
  return (
    <div className="p-6 min-h-screen min-w-screen">
      <ColorProvider>
        <AddColor />
        <ColorList />
      </ColorProvider>
    </div>
  );
};

export default App;
