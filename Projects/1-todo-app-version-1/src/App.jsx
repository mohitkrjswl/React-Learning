import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";

function App() {
  return (
    <center class="todo-container">
     <AppName />
     <AddTodo />
     <TodoItem1 />
     <TodoItem1 />
     

     {/* <AddTodo /> */}
      
    </center>
  );
}
export default App;
