import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function Featuredinfo() {
  return (
    <div className="w-full flex justify-between">
      <div className="flex-1 mt-6 mr-5 ml-5 p-8 rounded-xl cursor-pointer shadow-xl">
        <span className="text-3xl font-bold ">Revenue</span>
        <div className="mb-3 mt-3  flex items-center">
          <span className="text-2xl">Ksh 20,000</span>
          <span className="">
            -11.14 <ArrowDownward className="text-xl text-red-600" />{" "}
          </span>
          <br />
        </div>
        <span className="text-gray-500">Compared to last month</span>
      </div>
      <div className="flex-1 mt-6 mr-5 ml-5 p-8 rounded-xl cursor-pointer shadow-xl">
        <span className="text-3xl font-bold">Sales</span>
        <div className="mb-3 mt-3  flex items-center">
          <span className="text-2xl">Ksh 20,000</span>
          <span className="">
            -11.14 <ArrowDownward className="text-xl text-red-600" />{" "}
          </span>
        </div>
        <span className="text-gray-500">Compared to last month</span>
      </div>
      <div className="flex-1 mt-6 mr-5 ml-5 p-8 rounded-xl cursor-pointer shadow-xl">
        <span className="text-3xl font-bold">Cost</span>
        <div className="mb-3 mt-3 flex items-center">
          <span className="text-2xl">Ksh 20,000</span>
          <span className="">
            +21.14 <ArrowUpward className="text-xl text-green-600" />{" "}
          </span>
          <br />
        </div>
        <span className="text-gray-500">Compared to last month</span>
      </div>
    </div>
  );
}
