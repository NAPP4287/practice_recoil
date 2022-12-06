import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";
import { AlignCenter } from "../../style/styleCommon";
import { todoListState } from "../../recoil/storage";
import { useRecoilValue } from "recoil";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <AlignCenter>
      <div>
        <TodoCreator />
        {todoList.map((item, idx) => (
          <TodoItem key={idx} item={item} />
        ))}
      </div>
    </AlignCenter>
  );
};

export default TodoList;
