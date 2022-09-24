import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import { Icons } from "../../utils/icons";

export const Featured = () => {
  return (
    <div className="flex-[2] p-2 rounded shadow dark:shadow-white">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-medium text-zinc-400 dark:text-zinc-500">
          Total Revenue
        </h1>
        <Icons.dots className="cursor-pointer dark:text-zinc-500" />
      </div>

      <div className="flex flex-col items-center justify-center gap-3 p-5">
        <div className="w-24 h-24">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>

        <p className="font-medium text-zinc-400 dark:text-zinc-500">
          Total sales made today
        </p>
        <p className="text-3xl dark:text-zinc-400">$420</p>
        <p className="font-light text-xs text-zinc-400 text-center dark:text-zinc-500">
          Previous transactions processing. Last payments may not be included
        </p>

        <div className="flex justify-between items-end w-full gap-2">
          <div className="flex flex-col items-center">
            <p className="text-sm text-zinc-400 dark:text-zinc-500">Target</p>
            <div className="mt-2 text-sm positive">
              <Icons.keyboardUp fontSize="small" />
              $12.4k
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              Last Week
            </p>
            <div className="mt-2 text-sm positive">
              <Icons.keyboardUp fontSize="small" />
              $12.4k
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              Last Month
            </p>
            <div className="mt-2 text-sm negative">
              <Icons.keyboardDown fontSize="small" />
              $12.4k
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
