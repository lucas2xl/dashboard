import { Theme } from "../../context/themeContext";
import { useTheme } from "../../hooks/useTheme";
import { Icons } from "../../utils/icons";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center h-12 border-b bg-white dark:bg-zinc-900 dark:border-zinc-700 ">
      <div className="flex items-center justify-between p-4 w-full">
        <div className="flex items-center border gap-1 p-1 rounded dark:border-zinc-700">
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none bg-transparent dark:placeholder:text-zinc-500"
          />
          <Icons.search className="dark:text-zinc-500" />
        </div>

        <div className="flex items-center gap-4">
          <span className="flex gap-1 items-centers dark:text-zinc-500">
            <Icons.language />
            English
          </span>

          <div
            onClick={toggleTheme}
            className="cursor-pointer dark:text-blue-600 text-yellow-300"
          >
            {theme === Theme.dark ? <Icons.darkMode /> : <Icons.lightMode />}
          </div>

          <div className="dark:text-zinc-500">
            <Icons.fullscreen />
          </div>

          <div className="relative dark:text-zinc-500">
            <Icons.notifications />
            <div className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-red-600 rounded-full text-bold text-white dark:text-zinc-300 dark:bg-red-700">
              1
            </div>
          </div>

          <div className="relative dark:text-zinc-500">
            <Icons.chatBubble />
            <div className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-red-600 rounded-full text-bold text-white dark:text-zinc-300 dark:bg-red-700">
              4
            </div>
          </div>

          <div className="dark:text-zinc-500">
            <Icons.list />
          </div>

          <img
            src="https://i.pravatar.cc/300"
            alt="user image"
            className="w-7 h-7 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
