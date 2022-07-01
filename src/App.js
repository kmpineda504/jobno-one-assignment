import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";



function App() {
  // const [inputText, setInputText] = useState("");
  // const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <Header /> 
      <Form />
    </div>
  );
}

export default App;
