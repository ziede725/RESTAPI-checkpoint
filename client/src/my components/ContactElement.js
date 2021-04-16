import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import EditModal from "./EditModal";
import { useState } from "react";

import {
  getContacts,
  editContact,
  removeContact,
} from "../actions/ContactActions";

const ContactElement = ({ _id, name, lastName, email, phoneNumber }) => {
  const dispatch = useDispatch();

  return (
    <>
      <TableRow>
        <TableCell>
          <EditModal
            id={_id}
            Name={name}
            LastName={lastName}
            Email={email}
            PhoneNumber={phoneNumber}></EditModal>

          <Button onClick={() => dispatch(removeContact(_id))}>Remove </Button>
        </TableCell>
        <TableCell>{_id}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{lastName}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{phoneNumber}</TableCell>
      </TableRow>
    </>
  );
};

export default ContactElement;
