import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Tables = (props) => {
  const columns = [
    { field: "id", headerName: "ID.", width: 150 },
    { field: "carID", headerName: "เลขทะเบียนรถ", width: 150 },
    {
      field: "menberID",
      headerName: "เลขพนักงาน",
      width: 150,
    },
    { field: "week", headerName: "สัปดาห์", width: 150 },
    { field: "month", headerName: "เดือน", width: 150 },
    {
      field: "inbound",
      headerName: "เวลาเข้า",
      width: 190,
    },
    {
      field: "outbound",
      headerName: "เวลาออก",
      width: 190,
    },
  ];

  return (
      <div style={{ height: 460, width: "100%" }}>
        <DataGrid
          rows={props.data}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
  );
};

export default Tables;
