import { LeftBar } from "./LeftBar/page"
import { Console } from "./Console/page";
import { RightBar } from "./RightBar/Rightbar";
export default function Home() {
  return (
    <>
      <LeftBar></LeftBar>
      <RightBar></RightBar>
      <Console></Console>
    </>
  );
}
