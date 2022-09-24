import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import PaginationWrapper from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { colors } from "../../../styles/colors";

export const Pagination = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <PaginationWrapper
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      renderItem={(props) => (
        <PaginationItem
          {...props}
          sx={{
            borderColor: colors.violet[600],
            color: colors.violet[600],
            "&.Mui-selected": {
              color: colors.white,
              bgcolor: colors.violet[600],
              "&:hover": {
                bgcolor: colors.violet[700],
              },
            },
            "&.Mui-disabled": {
              color: colors.violet[600],
            },
            "&:hover": {
              bgcolor: colors.violet[400],
              color: colors.white,
            },
          }}
        />
      )}
      onChange={(_, value: number) => apiRef.current.setPage(value - 1)}
    />
  );
};
