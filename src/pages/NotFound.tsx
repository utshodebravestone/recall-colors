import { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center gap-2">
      <h1 className="text-5xl font-light">404 | Not Found</h1>
      <p className="mt-4 font-light">
        The content you are looking for doesn't exist.
      </p>
      <Link
        className="mt-4 py-3 px-6 bg-blue-500 text-white rounded font-bold  hover:scale-105 transition-transform duration-300"
        to="/"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
