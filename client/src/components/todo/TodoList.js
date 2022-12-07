import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";
import TodoStatusFilter from "./TodoStatusFilter";
import { AlignCenter } from "../../style/styleCommon";
import { todoListState, filteredTodoListState } from "../../recoil/storage";
import { useRecoilValue } from "recoil";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <AlignCenter style={{ height: "100vh" }}>
      <div>
        <TodoStatusFilter />
        <TodoCreator state={todoListState} />
        <div
          style={{
            backgroundColor: "#EFF5F5",
            padding: "0 20px",
            marginTop: "10px",
          }}>
          {todoList.map((item, idx) => (
            <TodoItem key={idx} item={item} state={todoListState} />
          ))}
        </div>
      </div>
    </AlignCenter>
  );
};

export default TodoList;
