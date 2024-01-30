import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";


function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div class='items-container'>
      <TodoItem1 />
      <TodoItem1 />
      </div>
      

      {/* <AddTodo /> */}
    </center>
  );
}
export default App;
