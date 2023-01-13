import { useState } from "react";
import { Modal } from "@tamoroso/react_modal_oc";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Open modal</button>
      <Modal show={show} style={{ padding: "2rem", minHeight: "min-content" }}>
        <div className="modal-header">
          <button onClick={() => setShow((prevState) => !prevState)}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div className="modal-content">
          <FontAwesomeIcon icon={faCheckCircle} size="2xl" color="green" />
          <h2>It's a test and it works</h2>
        </div>
      </Modal>
    </div>
  );
}

export default App;
