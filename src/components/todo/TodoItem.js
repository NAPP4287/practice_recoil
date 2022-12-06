import Toggle from "./Toggle";

const TodoItem = (props) => {
  const { item } = props;

  return (
    <div>
      {item}
      <Toggle />
    </div>
  );
};

export default TodoItem;
