import { Visibility } from "@material-ui/icons";
import profile from "../../images/me.jpg";
export default function Widgetsmall() {
  return (
    <div className="flex-1 shadow-xl p-5 mr-5">
      <span className="text-xl text-bold">New Join Members</span>
      <ul className="m-0 p-0 ">
        <li className="flex items-center justify-between mt-5 mb-5">
          <img
            src={profile}
            className="h-10 w-10 rounded-xl"
            alt="profile"
          ></img>
          <div className="flex flex-col">
            <span className="text-bold">Peter Tepela</span>
            <span className="text-thin">CTO</span>
          </div>
          <button className="flex items-center rounded bg-gray-300 p-2 text-gra-600 cursor-pointer">
            <Visibility className="text-lg mr-1" />
            Display
          </button>
        </li>
      </ul>
      <ul className="m-0 p-0 ">
        <li className="flex items-center justify-between mt-5 mb-5">
          <img
            src={profile}
            className="h-10 w-10 rounded-xl"
            alt="profile"
          ></img>
          <div className="flex flex-col">
            <span className="text-bold">Peter Tepela</span>
            <span className="text-thin">CTO</span>
          </div>
          <button className="flex items-center rounded bg-gray-300 p-2 text-gra-600 cursor-pointer">
            <Visibility className="text-lg mr-1" />
            Display
          </button>
        </li>
      </ul>
      <ul className="m-0 p-0 ">
        <li className="flex items-center justify-between mt-5 mb-5">
          <img
            src={profile}
            className="h-10 w-10 rounded-xl"
            alt="profile"
          ></img>
          <div className="flex flex-col">
            <span className="text-bold">Peter Tepela</span>
            <span className="text-thin">CTO</span>
          </div>
          <button className="flex items-center rounded bg-gray-300 p-2 text-gra-600 cursor-pointer">
            <Visibility className="text-lg mr-1" />
            Display
          </button>
        </li>
      </ul>
      <ul className="m-0 p-0 ">
        <li className="flex items-center justify-between mt-5 mb-5">
          <img
            src={profile}
            className="h-10 w-10 rounded-xl"
            alt="profile"
          ></img>
          <div className="flex flex-col">
            <span className="text-bold">Peter Tepela</span>
            <span className="text-thin">CTO</span>
          </div>
          <button className="flex items-center rounded bg-gray-300 p-2 text-gra-600 cursor-pointer">
            <Visibility className="text-lg mr-1" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
