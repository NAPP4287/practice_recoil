import "./App.css";
import { RecoilRoot } from "recoil";
// import RecoilInput from "./components/basic/RecoilInput";
// import RecoilCount from "./components/basic/RecoilCount";
import TodoList from "./components/todo/TodoList";

function App() {
  return (
    <RecoilRoot>
      {/* <RecoilInput></RecoilInput>
      <RecoilCount></RecoilCount> */}
      <TodoList></TodoList>
    </RecoilRoot>
  );
}

export default App;
