import React from "react";

import AllComplaints from "./pages/All_Compaints/All_Complaint";
import FakeComplaints from "./pages/False_Complaints/False_Complaints";
import History from "./pages/History/History";
import NewComplaints from "./pages/New_Complaints/New_Complaints";
import UrgentComplaints from "./pages/Urgent_Complaints/Urgent_Complaints";

function App() {
  return (
    <div>
      {/* <AllComplaints></AllComplaints> */}
      {/* <FakeComplaints></FakeComplaints> */}
      {/* <NewComplaints></NewComplaints> */}
      {/* <History></History> */}
      <UrgentComplaints></UrgentComplaints>
    </div>
  );
}

export default App;
