import * as React from "react";
import {
  DataGrid,
  GridToolbar,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  GridCellParams,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";

import "./Card.css";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}
export default function ToolbarGrid(props) {
  return (
    <div className="complaint-table">
      <DataGrid
        className="data-table"
        columns={props.columns}
        rows={props.rows}
        components={{
          Toolbar: GridToolbar,
          Pagination: CustomPagination,
        }}
        pageSize={5}
        rowHeight={40}
        sx={{ fontFamily: "Roboto Slab, serif" }}
        getCellClassName={(params) => {
          if (params.field === "status") {
            if (params.value === "Open") {
              return "open";
            } else if (params.value === "Inprogress") {
              return "inprogress";
            } else return "solved";
          }
          return "";
        }}
      />
    </div>
  );
}
