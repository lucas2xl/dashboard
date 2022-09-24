import { GridRenderCellParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DataGridStyle } from "./components/DataGridStyle";
import { Pagination } from "./components/Pagination";

interface Data {
  id: number;
  username: string;
  img: string;
  email: string;
  status: "active" | "passive" | "pending" | string;
  age: number;
}
interface Columns {
  field: string;
  headerName: string;
  width: number;
  renderCell?: (params: GridRenderCellParams) => JSX.Element;
}

interface DataTableProps {
  data: Data[];
  columns: Columns[];
}

export const DataTable = ({ data, columns }: DataTableProps) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => (
        <div className="flex items-center gap-3">
          <Link to="/users/1">
            <button className="p-1 rounded border border-blue-600 text-blue-600 dark:border-blue-900 dark:text-blue-900">
              Edit
            </button>
          </Link>
          <button className="p-1 rounded border border-red-600 text-red-600 dark:border-red-900 dark:text-red-900">
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <DataGridStyle
      rows={data}
      columns={columns.concat(actionColumn)}
      pageSize={11}
      rowsPerPageOptions={[11]}
      checkboxSelection
      components={{
        Pagination,
      }}
    />
  );
};
