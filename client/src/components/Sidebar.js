import {
  LineStyle,
  ShoppingBasket,
  Store,
  Timeline,
  TrendingUp,
} from "@material-ui/icons";
export default function Sidebar() {
  return (
    <div className="flex bg-gray-100 flex-1 sticky top-12" id="sidebar">
      <div className="p-5 w-full text-gray-700">
        <div className="mb-2">
          <h3 className="mb-2 text-gray-400 text-xl">Dashboard</h3>
          <ul className="cursor-pointer">
            <li
              className="p-5 mb-2 flex rounded-xl  "
              style={{ backgroundColor: "rgb(224,224,224)" }}
            >
              <LineStyle className="mr-2" />
              Home
            </li>
            <li className="p-5 flex rounded-xl hover:bg-gray-300">
              <Timeline className="mr-2" />
              Analytics
            </li>
            <li className="p-5 flex rounded-xl hover:bg-gray-300">
              <TrendingUp className="mr-2" />
              Sales
            </li>
            <li className="p-5 flex rounded-xl hover:bg-gray-300">
              <Store className="mr-2" />
              Stores
            </li>
            <li className="p-5 flex rounded-xl hover:bg-gray-300">
              <ShoppingBasket className="mr-2" />
              Products
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
