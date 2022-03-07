import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import "./Navigation.css";
import plus from "../../images/plus.png";
import AllComplaints from "../../pages/All_Compaints/All_Complaint";
import FakeComplaints from "../../pages/False_Complaints/False_Complaints";
import History from "../../pages/History/History";
import NewComplaints from "../../pages/New_Complaints/New_Complaints";
import UrgentComplaints from "../../pages/Urgent_Complaints/Urgent_Complaints";
import { Link } from "@mui/material";

const Navigation = () => {
  return (
    <div className="Nav sb">
      <span className="nav-right sb">
        <span className="appname">Mshikaayat</span>
        <Dropdown>
          <Dropdown.Toggle
            className="nav-dropdownbutton button-remove-css"
            id="dropdown-basic"
          >
            Complaints
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className="dropdown-links">
              All Complaints
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-links">
              False Complaints
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-links">
              Solved Complaints
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-links">
              Unsolved Complaints
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-links">
              Urgent Complaints
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <span className="nav-link">History</span>
        <span className="nav-link">
          New &nbsp;
          <img src={plus} width="13px" height="13px" />
        </span>
      </span>
      <span className="nav-left sb">
        <span className="nav-link logout">Logout</span>
      </span>
    </div>
  );
};

export default Navigation;
