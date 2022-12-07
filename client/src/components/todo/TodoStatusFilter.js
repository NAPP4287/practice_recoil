import { todoListFilterState } from "../../recoil/storage";
import { useRecoilState } from "recoil";

const TodoStatusFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const changeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <select
      value={filter}
      onChange={changeFilter}
      style={{ marginBottom: "10px" }}>
      <option value="Show All">All</option>
      <option value="Show Completed">Completed</option>
      <option value="Show Uncompleted">Uncompleted</option>
    </select>
  );
};

export default TodoStatusFilter;
