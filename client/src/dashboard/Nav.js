import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Nav = () => {
  return (
    <nav className="bg-blue-500 w-48 h-screen p-4">
      <ul className="flex flex-col gap-y-48 ">
        <li className="hover:bg-blue-200 w-42 cursor-pointer">
          <a className="text-3xl font-bold text-white" href="/dashboard">
            Dashboard
          </a>
        </li>
        <li className="hover:bg-blue-200 w-42 cursor-pointer">
          <a className="text-3xl font-bold text-white" href="/stores">
            Stores
          </a>
        </li>
        <li className="hover:bg-blue-200 w-42 cursor-pointer">
          <a className="text-3xl font-bold text-white">Products</a>
        </li>
        <li className="hover:bg-blue-200 w-42 cursor-pointer">
          <a className="text-3xl font-bold text-white">Settings</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
