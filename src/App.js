import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState ([]);
  const [status, setStatus] = useState ("all");
  const [filteredTodos, setfilteredTodos] = useState ([]);


  //use effect - just once
  useEffect(() => { 
    let todoLocal = window.localStorage.getItem('todos');
    if ( todoLocal !== null)  setTodos(JSON.parse(todoLocal));
  }, []);

  useEffect(() => {
    //save local
    window.localStorage.setItem('todos', JSON.stringify(filteredTodos));
  });

  //use effect - on changes in state
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setfilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted':
          setfilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setfilteredTodos(todos);
          break;
      }
    }    
    filterHandler();
  }, [todos, status]);

  return (
    <div className="container">
      <Header /> 
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
        setfilteredTodos={setfilteredTodos}
      />
    </div>
  );
}

export default App;
