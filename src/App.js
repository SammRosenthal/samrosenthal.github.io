import React from "react";
import Title from "./components/title/Title";
import Tech from "./components/tech/Tech";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./app.css";

library.add(fab);

function App() {
  return (
    <>
      <Title />
      <hr />
      <Tech />
      <hr />
    </>
  );
}

export default App;
