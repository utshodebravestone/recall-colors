import { FC } from "react";

const NotFound: FC = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-2">
      <h1 className="text-8xl font-light">404</h1>
      <h1 className="text-5xl font-light">Not Found</h1>
      <p className="font-light">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
