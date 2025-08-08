import { Outlet } from "react-router";
import { Navbar } from "../Navbar/Navbar";

export const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="max-w-6xl mx-auto px-2">
        <Outlet></Outlet>
      </main>
    </>
  );
};
