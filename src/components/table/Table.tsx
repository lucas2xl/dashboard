import { table } from "../../mocks/table";
import TableUI from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Table = () => {
  const rows = table.rows;

  return (
    <div>
      <TableContainer
        component={Paper}
        className="dark:bg-zinc-900 border-white"
      >
        <TableUI sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="dark:text-zinc-500">Tracking ID</TableCell>
              <TableCell className="dark:text-zinc-500">Product</TableCell>
              <TableCell className="dark:text-zinc-500">Customer</TableCell>
              <TableCell className="dark:text-zinc-500">Date</TableCell>
              <TableCell className="dark:text-zinc-500">Amount</TableCell>
              <TableCell className="dark:text-zinc-500">
                Payment Method
              </TableCell>
              <TableCell className="dark:text-zinc-500">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="dark:text-zinc-600">{row.id}</TableCell>
                <TableCell>
                  <div className="flex items-center dark:text-zinc-600">
                    <img
                      src={row.img}
                      alt=""
                      className="w-8 h-8 rounded-full mr-2 object-cover"
                    />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="dark:text-zinc-600">
                  {row.customer}
                </TableCell>
                <TableCell className="dark:text-zinc-600">{row.date}</TableCell>
                <TableCell className="dark:text-zinc-600">
                  {row.amount}
                </TableCell>
                <TableCell className="dark:text-zinc-600">
                  {row.method}
                </TableCell>
                <TableCell>
                  <span className={`p-2 rounded ${row.status}`}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableUI>
      </TableContainer>
    </div>
  );
};
