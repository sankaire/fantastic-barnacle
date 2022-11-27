import profile from "../../images/me.jpg";
const Button = ({ type }) => {
  return <button className="p-1 rounded bg-gray-300">{type}</button>;
};
export default function Widgetlarge() {
  return (
    <div className="shadow-xl p-5" style={{ flex: "2" }}>
      <h3 className="text-xl text-bold">Latest Transactions</h3>
      <table className="w-full border-spacing-5">
        <tr>
          <th className="text-left">Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>
            <img src={profile} className="w-5 h-5 rounded-xl" />
            <span>Ryan Dahl</span>
          </td>
          <td>2 jun 2021</td>
          <td>Ksh 2,000,000</td>
          <td>
            <Button type="Approved" />
          </td>
        </tr>
        <tr>
          <td>
            <img src={profile} className="w-5 h-5 rounded-xl" />
            <span>Ryan Dahl</span>
          </td>
          <td>2 jun 2021</td>
          <td>Ksh 2,000,000</td>
          <td>
            <Button type="Pending" />
          </td>
        </tr>
        <tr>
          <td>
            <img src={profile} className="w-5 h-5 rounded-xl" />
            <span>Ryan Dahl</span>
          </td>
          <td>2 jun 2021</td>
          <td>Ksh 2,000,000</td>
          <td>
            <Button type="Failed" />
          </td>
        </tr>
      </table>
    </div>
  );
}
