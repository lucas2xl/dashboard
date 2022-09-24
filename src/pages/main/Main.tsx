import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";

interface MainProps {
  children: React.ReactNode;
}
export const Main = ({ children }: MainProps) => {
  return (
    <div className="flex dark:bg-zinc-900">
      <div className="fixed w-48 z-50">
        <Sidebar />
      </div>

      <div className="fixed z-50  w-fixed">
        <Navbar />
      </div>

      <div className="mt-12 w-fixed">{children}</div>
    </div>
  );
};
