import { ToggleWrap, ToggleCircle } from "../../style/styleToggle";

const Toggle = (props) => {
  const { todoList, setTodoList, item } = props;

  const changeComplete = () => {
    setTodoList(editArray({ ...item, isComplete: !item.isComplete }));
  };

  const editArray = (newValue) => {
    return [
      ...todoList.slice(0, item.id),
      newValue,
      ...todoList.slice(item.id + 1),
    ];
  };

  return (
    <ToggleWrap
      onClick={changeComplete}
      style={
        item.isComplete
          ? { flexDirection: "row-reverse", backgroundColor: "#c147e9" }
          : null
      }>
      <ToggleCircle></ToggleCircle>
    </ToggleWrap>
  );
};

export default Toggle;
