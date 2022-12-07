import React from "react";
import { useRecoilState } from "recoil";
import { testAtom } from "../../recoil/storage";

const RecoilInput = () => {
  const [text, setText] = useRecoilState(testAtom);
  const textChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      this is button component <input onChange={(e) => textChange(e)} />
      <div>text : {text}</div>
    </div>
  );
};

export default RecoilInput;
