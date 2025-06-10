import { Outlet } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { Instruction } from "./pages/Instruction";
import { Intro } from "./pages/Intro";

export const Content = () => {
  return (
    <div className="board">
      <Outlet></Outlet>
    </div>
  );
};
