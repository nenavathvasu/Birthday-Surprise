import React, { useState } from "react";
import NameInput from "./components/NameInput";
import Surprise from "./components/Surprise";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      {!name ? <NameInput setName={setName} /> : <Surprise name={name} />}
    </div>
  );
}

export default App;