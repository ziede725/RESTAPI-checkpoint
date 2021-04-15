const initialState = {
  contactList: [],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTACT":
      return { ...state, contactList: action.payload };

    default:
      return state;
  }
};
export default myReducer;
