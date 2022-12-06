import "./App.css";
import { RecoilRoot, selector, useRecoilState, useRecoilValue } from "recoil";
import RecoilInput from "./components/RecoilInput";
import RecoilCount from "./components/RecoilCount";
import { testAtom } from "./recoil/storage";

function App() {
  return (
    <RecoilRoot>
      <RecoilInput></RecoilInput>
      <RecoilCount></RecoilCount>
    </RecoilRoot>
  );
}

export default App;
