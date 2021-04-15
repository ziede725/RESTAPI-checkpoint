import axios from "axios";

// export const editContact = (payload) => (dispatch) => {
//   return {
//     type: "EDIT_CONTACT",
//     payload,
//   };
// };

// export const removeContact = () => {
//   return {
//     type: "REMOVE_CONTACT",
//     payload,
//   };
// };

// export const addContact = (contact) => {
//   return {
//     type: "ADD_CONTACT",
//     payload: contact,
//   };
// };

export const getContacts = () => (dispatch) => {
  axios.get("http://localhost:5000/user").then((res) => {
    dispatch({ type: "GET_CONTACT", payload: res.data });
  });
};
