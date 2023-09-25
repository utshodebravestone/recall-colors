import { FC } from "react";
import { Link } from "react-router-dom";
import useColor from "../hooks/useColor";

const Home: FC = () => {
  const colorsIsEmpty = useColor().colors.length == 0;

  return (
    <div className="h-[80vh] w-full mx-1 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-light">Recall Colors</h1>
      <p className="mt-4 pt-2 border-t border-slate-300 text-xl font-light text-center">
        How many times have you came across a color only to forget about it?
        <br />
        Well, no more.
        <br />
        By using this app you can keep track of them.
      </p>
      <Link
        className="mt-6 py-4 px-8 bg-blue-500 text-white rounded font-bold text-xl hover:scale-105 transition-transform duration-300"
        to="/colors"
      >
        {colorsIsEmpty ? "Get Started" : "See Saved Colors"}
      </Link>
    </div>
  );
};

export default Home;
