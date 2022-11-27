import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import profile from "../../images/me.jpg";
export default function Topbar() {
  return (
    <div className="w-full h-12 bg-white sticky top-0 ">
      <div className="h-full p-5 flex items-center justify-between">
        <div>
          <span className="font-bold text-3xl cursor-pointer text-blue-900">
            Symentical
          </span>
        </div>
        <div className="flex items-center">
          <div className="relative cursor-pointer mr-2.5 text-gray-400">
            <NotificationsNone />
            <span className="text-xs absolute -top-1.5 right-1.5 bg-red-500 rounded-3xl text-white flex items-center justify-center w-4 h-4">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-2.5 text-gray-400">
            <Language />
            <span className="text-xs absolute -top-1.5 right-1.5 bg-red-500 rounded-3xl text-white flex items-center justify-center w-4 h-4">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-2.5 text-gray-400">
            <Settings />
          </div>
          <img
            src={profile}
            alt="profile"
            className="w-10 h-10 rounded-3xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
