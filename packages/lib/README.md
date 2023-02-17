# React_modal_oc

---

_Disclaimer : This project was made for training purposes. The librairy will not be maintained overtime. If you are interested in studying it’s anatomy feel free to clone the repository._

react_modal_oc is a library made for project 14 of OpenClassrooms’ Front-End developer course. It offers a simple React modal components with minimal dependencies.

## Dependencies :

This library was built by using [vite](https://vitejs.dev/guide/) build tool in library mode and its React typescript template.

- React
- React-dom

## Installation :

`npm install @tamoroso/react_modal_oc`

## Usage :

```javascript
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
```

**Props :**

- **show :** Boolean that determines of modal should be display or not ;
- Any props that can be passed down to a `<div/>` element ;

TODO: Add the link to the deploy
**Exemple :** Here is a working example [Link to demo deploy].

---

## If you want to add new components or modify the library :

- Clone the repository : `git clone https://github.com/tamoroso/react_modal_oc.git` ;
- Install dependencies : `npm install` ;
- Edit files according to your goals ;
- Build the library : `npm run build` ;
- Test your changes by statrting the react application in local ;
  **Note :** You can edit this application to test the new features you have developed.
