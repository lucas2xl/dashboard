import { Icons } from "../../utils/icons";

interface WidgetProps {
  type: "user" | "order" | "earning" | "balance";
}
export const Widget = ({ type }: WidgetProps) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <div className="flex items-center justify-center self-end p-1 rounded bg-red-700/20 text-red-700">
            <Icons.person />
          </div>
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <div className="flex items-center justify-center self-end p-1 rounded bg-yellow-700/20 text-yellow-700">
            <Icons.shoppingCart />
          </div>
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <div className="flex items-center justify-center self-end p-1 rounded bg-green-700/20 text-green-700">
            <Icons.monetizationOn />
          </div>
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <div className="flex items-center justify-center self-end p-1 rounded bg-purple-700/20 text-purple-700">
            <Icons.accountBalanceWallet />
          </div>
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="flex justify-between flex-1 p-2 shadow hover:scale-105 transition dark:shadow-white">
      <div className="flex justify-between flex-col gap-2">
        <span className="text-sm font-bold text-zinc-400 dark:text-zinc-600">
          {data?.title}
        </span>

        <span className="text-2xl font-light dark:text-zinc-400">
          {data?.isMoney && "$"} {amount}
        </span>

        <a className="text-xs border-b border-zinc-600 hover:text-violet-500 hover:border-violet-500 dark:text-zinc-500">
          {data?.link}
        </a>
      </div>

      <div className="flex flex-col justify-between gap-2">
        <div className="flex items-center text-sm positive">
          <Icons.keyboardUp />
          {diff} %
        </div>

        {data?.icon}
      </div>
    </div>
  );
};
