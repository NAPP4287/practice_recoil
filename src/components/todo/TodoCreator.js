import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { CommonInput } from "../../style/styleCommon";

const TodoCreator = ({ state }) => {
  const setChangeTodo = useSetRecoilState(state);
  const [inputValue, setInputValue] = useState("");
  const [listId, setListId] = useState(0);

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  const getId = () => {
    return setListId(listId + 1);
  };

  const addTodoList = () => {
    console.log(listId);
    setChangeTodo((oldList) => [
      ...oldList,
      { id: getId(), text: inputValue, isComplete: false },
    ]);

    setInputValue("");
  };

  return (
    <div>
      <CommonInput onChange={(e) => changeInput(e)} value={inputValue} />
      <button
        onClick={addTodoList}
        style={{
          width: "80px",
          height: "30px",
          marginLeft: "5px",
          border: "none",
          backgroundColor: "#c147e9",
          color: "white",
          fontWeight: "bold",
        }}>
        추가
      </button>
    </div>
  );
};

export default TodoCreator;
