import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { Button } from "@material-ui/core";

const ContactElement = ({ _id, name, lastName, email, phoneNumber }) => {
  return (
    <>
      <TableRow>
        <TableCell>
          <Button>Edit</Button>
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
