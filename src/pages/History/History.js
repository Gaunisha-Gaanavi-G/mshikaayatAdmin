import React from "react";

import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import ViewComplaintButton from "../../components/ComplaintReport/ComplaintReport";
import InvestigationModal from "../../components/InvestigationModal/InvestigationModel";

const History = () => {
  const columns = [
    { field: "complaintid", headerName: "Complaint Id", width: 130 },
    { field: "uniquecode", headerName: "Unique code", width: 130 },
    { field: "location", headerName: "Location", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "settofalse",
      headerName: "Set to False",
      width: 180,
      renderCell: () => {
        return (
          <div>
            <InvestigationModal></InvestigationModal>
          </div>
        );
      },
    },
    {
      field: "view",
      headerName: "View",
      width: 180,
      renderCell: () => {
        return (
          <div>
            <ViewComplaintButton></ViewComplaintButton>
          </div>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      complaintid: 1,
      uniquecode: "1AB23C",
      location: "Kuniamuthur",
      status: "Solved",
    },
    {
      id: 2,
      complaintid: 2,
      uniquecode: "4AD2CG",
      location: "Vadavalli",
      status: "Solved",
    },
    {
      id: 3,
      complaintid: 3,
      uniquecode: "2DJ6IL",
      location: "Erode",
      status: "Solved",
    },
    {
      id: 4,
      complaintid: 4,
      uniquecode: "3GHJ23",
      location: "Salem",
      status: "Solved",
    },
    {
      id: 5,
      complaintid: 5,
      uniquecode: "1AB23C",
      location: "Kuniamuthur",
      status: "Solved",
    },
    {
      id: 6,
      complaintid: 6,
      uniquecode: "4AD2CG",
      location: "Vadavalli",
      status: "Solved",
    },
    {
      id: 7,
      complaintid: 7,
      uniquecode: "2DJ6IL",
      location: "Erode",
      status: "Solved",
    },
    {
      id: 8,
      complaintid: 8,
      uniquecode: "3GHJ23",
      location: "Salem",
      status: "Solved",
    },
  ];
  return (
    <div>
      <Navigation></Navigation>
      <Card columns={columns} rows={rows}></Card>
      <Footer></Footer>
    </div>
  );
};

export default History;
