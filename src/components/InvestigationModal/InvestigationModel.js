import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { MDBInput } from "mdbreact";

import "./InvestigationModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InvestigationModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="set-to-false" onClick={handleOpen}>
        Set to Fake
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Investigation Report
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {/* <TextField label="Detail" id="standard-size-normal" defaultValue="All clear!Nothing Suspicious." variant="standard" multiline rows={4} cols={7}/><br></br><br></br> */}
              <MDBInput type="textarea" rows="8" />
              <br></br>
              <Button variant="outlined" color="error" onClick={handleClose}>
                Fake
              </Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
