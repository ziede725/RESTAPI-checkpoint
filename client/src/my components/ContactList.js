import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import ContactElement from "./ContactElement";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../actions/ContactActions";

const ContactList = () => {
  const contact = useSelector((state) => state.contactList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>UserId</TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>Email </TableCell>
              <TableCell>Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contact.map((row) => (
              <ContactElement
                key={row._id}
                _id={row._id}
                name={row.name}
                lastName={row.lastName}
                email={row.email}
                phoneNumber={row.phoneNumber}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
export default ContactList;
