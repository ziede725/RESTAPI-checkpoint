import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const ContactList = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user").then((res) =>
      res.json().then((data) => setContact(data))
    );
  }, []);
  useEffect(() => {
    const createData = (id, lastName, firstName, email, phone) => {
      return { id, lastName, firstName, email, phone };
    };
  }, []);

  const rows = contact.map((el) => el);

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
            {rows.map((row) => (
              <TableRow key={row._id}>
                <TableCell>
                  <Button>Edit</Button>
                </TableCell>
                <TableCell>{row._id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
export default ContactList;
