import { Link } from "react-router-dom";
import { Theme } from "../../context/themeContext";
import { useTheme } from "../../hooks/useTheme";
import { Icons } from "../../utils/icons";

export const Sidebar = () => {
  const { setDarkModeTheme, setLightModeTheme } = useTheme();

  return (
    <div className="border-r min-h-screen bg-white dark:bg-zinc-900 dark:border-zinc-700">
      <div className="flex items-center justify-center h-12">
        <Link to="/">
          <span className="text-violet-600 text-lg font-black dark:text-zinc-500">
            lamadmin
          </span>
        </Link>
      </div>

      <div className="pl-2 border-y dark:border-zinc-700">
        <ul className="list-none">
          <p className="text-xs text-bold text-zinc-400 mt-3 mb-1 dark:text-zinc-600">
            MAIN
          </p>
          <Item title="Dashboard" to="/" icon={Icons.dashboard} />

          <p className="text-xs text-bold text-zinc-400 mt-3 mb-1 dark:text-zinc-600">
            LISTS
          </p>
          <Item title="Users" to="/users" icon={Icons.user} />
          <Item title="Products" to="/products" icon={Icons.products} />
          <Item title="Delivery" to="/" icon={Icons.delivery} />

          <p className="text-xs text-bold text-zinc-400 mt-3 mb-1 dark:text-zinc-600">
            USEFUL
          </p>
          <Item title="Stats" to="/" icon={Icons.stats} />
          <Item title="Notifications" to="/" icon={Icons.notifications} />

          <p className="text-xs text-bold text-zinc-400 mt-3 mb-1 dark:text-zinc-600">
            SERVICE
          </p>
          <Item title="System Health" to="/" icon={Icons.systemHealth} />
          <Item title="Logs" to="/" icon={Icons.logs} />
          <Item title="Settings" to="/" icon={Icons.settings} />

          <p className="text-xs text-bold text-zinc-400 mt-3 mb-1 dark:text-zinc-600">
            USER
          </p>
          <Item title="Profile" to="/" icon={Icons.profile} />
          <Item title="Logout" to="/" icon={Icons.logout} />
        </ul>
      </div>

      <div className="flex items-center m-2 gap-2">
        <div
          onClick={setLightModeTheme}
          className="w-5 h-5 rounded border border-violet-600 cursor-pointer bg-white dark:border-violet-800"
        />
        <div
          onClick={setDarkModeTheme}
          className="w-5 h-5 rounded border border-violet-600 cursor-pointer bg-black dark:border-violet-800"
        />
      </div>
    </div>
  );
};

interface ItemProps {
  icon: any;
  title: string;
  to: string;
}
const Item = ({ icon: Icon, title, to }: ItemProps) => {
  return (
    <Link to={to}>
      <li className="flex items-center p-1 gap-2 rounded hover:bg-violet-100 dark:hover:bg-zinc-800">
        <Icon className="text-lg text-violet-600 dark:text-violet-800" />
        <span className="text-sm font-semibold text-zinc-400 dark:text-zinc-500">
          {title}
        </span>
      </li>
    </Link>
  );
};
