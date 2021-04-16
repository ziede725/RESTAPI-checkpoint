import axios from "axios";

export const editContact = (payload) => async (dispatch) => {
  const res = await axios.patch(`http://localhost:4700/user/${payload.id}`, {
    name: payload.name,
    lastName: payload.lastName,
    email: payload.email,
    phoneNumber: payload.phoneNumber,
  });
  dispatch(getContacts());
};

export const removeContact = (payload) => async (dispatch) => {
  const res = await axios.delete(`http://localhost:4700/user/${payload}`);
  dispatch(getContacts());
};

export const addContact = (contact) => async (dispatch) => {
  const res = await axios.post("http://localhost:4700/user", {
    name: contact.name,
    lastName: contact.lastName,
    email: contact.email,
    phoneNumber: contact.phoneNumber,
  });
  dispatch(getContacts());
};
export const getContacts = () => (dispatch) => {
  axios.get("http://localhost:4700/user").then((res) => {
    dispatch({ type: "GET_CONTACT", payload: res.data });
  });
};
