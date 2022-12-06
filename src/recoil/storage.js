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
  default: ["Recoil 학습하기"],
});
