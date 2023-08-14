import TodoTitle from "./TodoTitle";
import TodoRowItem from "./TodoRowItem";

function TodoTable(props) {
  return (
      <table className={"table table-hover"}>
            <thead>
                <TodoTitle/>
            </thead>
            <tbody>
            {props.todos.map(todo => (
                <TodoRowItem
                    rowNumber={todo.rowNumber}
                    rowDescription={todo.rowDescription}
                    rowAssigned={todo.rowAssigned}
                />
            ))}
            </tbody>
      </table>
  )
}

export default TodoTable