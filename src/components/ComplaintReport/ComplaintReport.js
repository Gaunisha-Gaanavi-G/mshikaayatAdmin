import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ComplaintReport.css";
import location from "../../images/location.PNG";
import close from "../../images/close.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="view-report" onClick={handleClickOpen}>
        View Complaint
      </button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar className="header">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <img src={close} width="35px" height="35px" />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              &emsp;&emsp;&emsp;
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Narcotics_Control_Bureau_Seal.svg/1200px-Narcotics_Control_Bureau_Seal.svg.png"
                width={"6%"}
                height={"6%"}
                alt="NCB"
              />
              &emsp;&emsp;Narcotics Control Bureau
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="content">
          <div className="left">
            <h4>Case No. 10029012</h4>
          </div>
          <div className="right">
            <h4>Date: 06/03/2022</h4>
          </div>
        </div>

        <Container className="complaint-container">
          <Row className="head">
            <Col sm={8}>
              <b>INCIDENT</b> <br></br>
              &emsp;&emsp;On <b>March 6, 2022</b> at <b>4:30 pm</b>, NCB was
              notified via MShikaayat App that Drug Trafickking was allegedly
              took place at
              <b> Ukkadam, Coimbatore, Tamil Nadu</b>.<br></br>
              <br></br>
              <b>CRIME DETAIL</b>
              <br></br>
              &emsp;&emsp;Anonymous User of MShikaayat App states that the Drugs
              are being <b>Grown/Made</b> at{" "}
              <b>Ukkadam, Coimbatore, Tamil Nadu</b>.<br></br>
              &emsp;&emsp; &emsp;The details of the person(s) who are involved
              in the above mentioned crime are allegedly seems to be
              <b> Joel</b> residing at <b>No.18, Street no.1, Townhall</b>.
              {/* <br></br>
                    &emsp;&emsp; */}
              &emsp;The above information is alleged to be <b>seen</b> by the
              Anonymous User.
            </Col>
            <Col sm={4}>
              <img src={location} width={"100%"} height={"100%"} />
            </Col>
          </Row>
          <Row className="head">
            <Col sm>
              <br></br>
              &emsp;&emsp;Anonymous User also states that the Drug named{" "}
              <b>Heroin</b> is sold <b>through vendors</b>. The quantity is
              about <b>30 kg</b> and its price is estimated to be <b>1 Lakh</b>.
              It is said that the crime is <b>not</b> involved with any Weapons
              in the surroundings. The crime is alleged that the county line
              number used is <b>0422 2983982</b> and trafickking via{" "}
              <b>Ukkadam highway</b>. It is also stated that the Security
              measures at the mentioned address may include <b>Dogs, CCTVs</b>{" "}
              etc.
              <br></br>
              &emsp;&emsp;Anonymous User allegedly stated that there is mobility
              of Children or Vulnerables of aged <b>below 18</b>. The Drug or
              people mentioned are <b>not</b> involved in competitive sport.
              <br></br>
              &emsp;&emsp;The vehicles used in the crime are allegedly to
              identified as <b>Scorpio Black</b>.<br></br>
              <br></br>
              <b>Further Information added by the Anonymous User</b>
              <br></br>&emsp;&emsp;The drug trafickking took place at Ukkadam.
              5-7 men are involved in this crime. I couldn't identify everyone.
              I ve share a pic of the location.
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className="head">
            <Col sm>
              <b>Images provided</b>
              <br></br>
              <br></br>
              <img
                src="https://www.eurojust.europa.eu/sites/default/files/inline-images/2021_05_28_pr_in_focus_pic.jpg"
                width={400}
                height={300}
              />
            </Col>
          </Row>
        </Container>
      </Dialog>
    </div>
  );
}
