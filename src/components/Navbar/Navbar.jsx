import { NavLink } from "react-router";

export const Navbar = () => {
  const navMenu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Listed Books",
      path: "/listed-books",
    },
    {
      name: "Page to read",
      path: "/page-to-read",
    },
  ];
  return (
    <header className="max-w-6xl mx-auto">
      <nav className="flex justify-between items-center h-14 px-2">
        <div className="text-lg">Book Vibe</div>

        <ul className="flex justify-center items-center space-x-6 text-lg">
          {navMenu.map((menu, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-green-500 p-2" : "p-2"
                }
                to={`${menu.path}`}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="text-white">
          <button className="bg-[#23BE0A] px-6 py-2.5 rounded-md mr-4">
            Sign In
          </button>
          <button className="bg-[#59C6D2] px-6 py-2.5 rounded-md">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};
