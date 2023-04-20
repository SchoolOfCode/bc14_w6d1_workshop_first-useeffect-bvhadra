import { useState, useEffect } from "react";

import List from "../List";
import Input from "../Input";

import "./App.css";

function App() {
  console.log("App rerender");
  const [toDos, setToDos] = useState(["test"]);

 /*
change the page title to `<NUMBER_OF_THINGS> things to do...` (keep in mind you need to replace `NUMBER_OF_THINGS` with an actual value). This should change every time the length of things to do changes. By interacting with the DOM directly, we are reaching outside of React as a side effect, so we should use the effect hook.
 */

//----------------------------

  useEffect(() => {
    document.title = `${toDos.length} things to do...`;
  }, [toDos]);

//----------------------------

  function handleDelete(i) {
    console.log("%chandle delete", "color:lightblue");
    setToDos([...toDos.slice(0, i), ...toDos.slice(i + 1)]);
  }

  function addToDo(text) {
    console.log("%cadd to do ", "color:lightgreen");
    setToDos([...toDos, text]);
  }

  return (
    <div className="App">
      <h1>My list...</h1>
      <Input onData={addToDo} />
      <List toDos={toDos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
