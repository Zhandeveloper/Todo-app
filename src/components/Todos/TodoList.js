import Todo from "./Todo";
import styles from "./TodoList.module.css";
function TodoList({ todos, deleteTodo ,toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h1>Todo list is empty</h1>}
      {todos.map((todo) => (
        <Todo 
        todo={todo} 
        key={todo.id} 
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo} />
      ))}
    </div>
  );
}

export default TodoList;
