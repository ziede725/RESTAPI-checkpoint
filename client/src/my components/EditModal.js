import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { editContact } from "../actions/ContactActions";
import { useDispatch } from "react-redux";

const EditModal = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(open);
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter the required fields</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            required
            fullWidth
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="lastName"
            type="text"
            required
            fullWidth
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            required
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="phoneNumber"
            type="tel"
            required
            fullWidth
            onChange={(event) => setPhoneNumber(event.target.value)}
            value={phoneNumber}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              dispatch(editContact({ id, name, lastName, email, phoneNumber }));
              handleClose();
            }}
            color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditModal;
