import { Chart } from "../../components/chart/Chart";
import { Featured } from "../../components/featured/Featured";
import { Table } from "../../components/table/Table";
import { Widget } from "../../components/widget/Widget";

export const Home = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-5 p-5">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>

      <div className="flex gap-5 py-1 px-5">
        <Featured />

        <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
      </div>

      <div className="shadow p-2 m-2 rounded dark:border-zinc-500 dark:shadow-white">
        <p className="text text-zinc-400 font-medium mb-4 dark:text-zinc-500">
          Latest Transactions
        </p>
        <Table />
      </div>
    </div>
  );
};
