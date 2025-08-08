import { Link } from "react-router";

export const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      PAGE NOT FOUND
       <Link to={'/'}>go home</Link>
    </div>
  );
};
