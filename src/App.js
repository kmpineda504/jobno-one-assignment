import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todolist from "./components/Todolist";


function App() {
  // const [inputText, setInputText] = useState("");
  // const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <Header /> 
      <Form />
      <Todolist />
    </div>
  );
}

export default App;
