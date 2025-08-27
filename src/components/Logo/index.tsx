import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to={"/"} className="flex items-center gap-3">
      <span className="text-3xl text-blue-600 hidden sm:block">
        <img
          src="https://i.postimg.cc/nLFY8Q8d/Logo.png"
          alt="Logo"
          className="h-5"
        />
      </span>
      <div>
        <h2 className="text-xl font-bold text-stem-green-600">Artificium</h2>
        <span className="text-xs text-gray-500">
          Project Collaboration Platform
        </span>
      </div>
    </Link>
  );
}
