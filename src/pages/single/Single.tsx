import { Chart } from "../../components/chart/Chart";
import { Table } from "../../components/table/Table";

interface SingleProps {}
export const Single = ({}: SingleProps) => {
  return (
    <div>
      <div className="flex p-5 gap-5">
        <div className="flex:1 relative p-2 rounded shadow dark:shadow-white">
          <button className="absolute right-0 top-0 p-2 text-xs rounded-tr text-violet-600 bg-violet-200 dark:bg-violet-900 dark:text-violet-300">
            Edit
          </button>

          <h1 className="text text-zinc-400 mb-5 dark:text-zinc-600">
            Information
          </h1>

          <div className="flex flex-col items-center gap-5">
            <img
              src="https://i.pravatar.cc/300?img=1"
              alt="user image"
              className="w-24 h-24 rounded-full object-cover"
            />

            <div className="flex flex-col min-w-[200px] ">
              <span className="text-2xl text-zinc-500 mb-2 text-center dark:text-zinc-400">
                Jane Joe
              </span>

              <Item title="Email:" value="Janedoe@gmail.com" />
              <Item title="Phone:" value="+55 48 9 9999-9999" />
              <Item title="Address:" value="Rua 25 de março, SP" />
              <Item title="Country:" value="Brazil" />
            </div>
          </div>
        </div>

        <div className="flex-[2] rounded">
          <Chart aspect={3 / 1} title="User Spending (Las 6 Months)" />
        </div>
      </div>

      <div className="p-2 my-2 mx-5 rounded shadow dark:shadow-white">
        <h1 className="text-zinc-400 mb-5 text-base">Last Transactions</h1>
        <Table />
      </div>
    </div>
  );
};

interface ItemProps {
  title: string;
  value: string;
}
const Item = ({ title, value }: ItemProps) => {
  return (
    <div className="flex mb-2 text-sm gap-1">
      <span className="text-zinc-400 font-bold dark:text-zinc-500">
        {title}
      </span>
      <span className="font-light dark:text-zinc-400">{value}</span>
    </div>
  );
};
