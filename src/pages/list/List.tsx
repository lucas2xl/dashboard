import { useState } from "react";
import { DataTable } from "../../components/dataTable/DataTable";
import { dataTable } from "../../mocks/dataTable";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export const List = () => {
  const [data, setData] = useState(dataTable.userRows);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params: GridRenderCellParams) => (
        <div className="flex items-center gap-5">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={params.row.img}
            alt="avatar"
          />
          {params.row.username}
        </div>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },

    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params: GridRenderCellParams) => (
        <div className={`p-1 rounded-md ${params.row.status}`}>
          {params.row.status}
        </div>
      ),
    },
  ];

  return (
    <div className="h-[725px] p-5">
      <div className="flex items-center justify-between w-full mb-3 text-zinc-400 shadow p-2 rounded dark:shadow-white dark:text-zinc-600">
        Add new User
        <Link to="/users/new" className="btn-outline">
          Add New
        </Link>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  );
};
