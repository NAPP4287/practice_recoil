import Toggle from "./Toggle";
import { AlignCenter } from "../../style/styleCommon";

const TodoItem = (props) => {
  const { item } = props;

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
          }}>
          X
        </span>
        <div>{item.text}</div>
      </div>
      <Toggle />
    </AlignCenter>
  );
};

export default TodoItem;
