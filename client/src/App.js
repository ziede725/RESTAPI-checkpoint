import "./App.css";
import ContactList from "./my components/ContactList";
import { Button } from "@material-ui/core";
import AddModal from "./my components/AddModal";

function App() {
  const toggleModal = () => {};
  return (
    <>
      <AddModal></AddModal>
      <ContactList />
    </>
  );
}

export default App;
