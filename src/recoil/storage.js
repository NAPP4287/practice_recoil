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
