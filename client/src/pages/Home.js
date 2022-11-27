import { userData } from "../../dummyData";
import Charts from "../components/ Charts";
import Featuredinfo from "../components/Featuredinfo";
import Widgetlarge from "../components/Widgetlarge";
import Widgetsmall from "../components/Widgetsmall";

export default function Home() {
  return (
    <div className="" style={{ flex: "4" }}>
      <Featuredinfo />
      <Charts
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="flex">
        <Widgetsmall />
        <Widgetlarge />
      </div>
    </div>
  );
}
