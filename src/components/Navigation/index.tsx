import { FC } from "react";
import { FaHome, FaTrophy } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <div className="bg-slate-50 py-3 px-5 shadow-md mb-7 flex justify-between items-center">
      <ul>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              `flex items-center gap-2 py-1 font-normal ${
                isPending
                  ? "text-red"
                  : isActive
                  ? "text-slate-500 scale-105"
                  : ""
              } hover:text-slate-500 transition-all duration-300`
            }
            to="/"
          >
            <FaHome size={20} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              `flex items-center gap-2 py-1 font-normal ${
                isPending
                  ? "text-red"
                  : isActive
                  ? "text-slate-500 scale-105"
                  : ""
              } hover:text-slate-500 transition-all duration-300`
            }
            to="/sort"
          >
            <FaTrophy size={20} />
            Sort Colors
          </NavLink>
        </li>
      </ul>
      <h1 className="text-4xl font-light flex items-end gap-2">React Colors</h1>
    </div>
  );
};

export default Navigation;
