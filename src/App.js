import React from "react";
import Title from "./components/title/Title";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <>
      <Title />
      <hr />
    </>
  );
}

export default App;
