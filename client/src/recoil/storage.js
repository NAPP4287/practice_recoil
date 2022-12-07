import { atom, selector } from "recoil";

export const testAtom = atom({
  key: "testAtom",
  default: "",
});

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(testAtom);

    return text.length;
  },
});

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(todoListFilterState);

    if (filter === "Show Completed") return list.filter((el) => el.isComplete);
    else if (filter === "Show Uncompleted")
      return list.filter((el) => !el.isComplete);
    else return list;
  },
});
