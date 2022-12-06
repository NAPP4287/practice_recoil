import { selector, useRecoilValue } from "recoil";
import { charCountState } from "../recoil/storage";

const RecoilCount = () => {
  const count = useRecoilValue(charCountState);

  return <div>count : {count}</div>;
};

export default RecoilCount;
