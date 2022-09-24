import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import { CheckboxStyle } from "./CheckboxStyle";
import { colors } from "../../../styles/colors";

export const DataGridStyle = styled(DataGrid)(({ theme }) => {
  const isLightMode = theme.palette.mode === "light";
  console.log("isLightMode", isLightMode);
  return {
    color: isLightMode ? colors.zinc[400] : colors.zinc[600],
    "& .MuiDataGrid-iconSeparator": {
      color: isLightMode ? colors.zinc[400] : colors.zinc[600],
    },
    "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
      borderBottom: `1px solid ${
        isLightMode ? colors.zinc[200] : colors.zinc[900]
      }`,
    },
    "& .MuiDataGrid-cell": {
      color: isLightMode ? colors.zinc[400] : colors.zinc[600],
    },
    "& .MuiDataGrid-row.Mui-selected, .MuiDataGrid-row.Mui-selected:hover": {
      backgroundColor: isLightMode ? colors.violet[100] : colors.violet[100],
    },
    "& .MuiDataGrid-row:hover": {
      backgroundColor: isLightMode ? colors.violet[50] : colors.violet[900],
    },
    "& .MuiDataGrid-cell:focus-within": {
      outline: "none",
    },

    ...CheckboxStyle(theme),
  };
});
