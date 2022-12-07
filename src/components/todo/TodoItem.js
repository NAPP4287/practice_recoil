import Toggle from "./Toggle";
import { AlignCenter } from "../../style/styleCommon";
import { useRecoilState } from "recoil";

const TodoItem = (props) => {
  const { item, state, idx } = props;
  const [todoList, setTodoList] = useRecoilState(state);

  const removeList = (index) => {
    setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
  };

  return (
    <AlignCenter style={{ justifyContent: "space-between", padding: "20px 0" }}>
      <div style={{ display: "flex" }}>
        <span
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "#c147e9",
            textAlign: "center",
            lineHeight: "20px",
            borderRadius: "20px",
            color: "white",
            fontSize: "12px",
            marginRight: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => removeList(idx)}>
          X
        </span>
        <div>{item.text}</div>
      </div>
      <Toggle
        item={item}
        setTodoList={setTodoList}
        todoList={todoList}
        idx={idx}
      />
    </AlignCenter>
  );
};

export default TodoItem;
