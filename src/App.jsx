import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(true);
  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickSwitchFaceShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは。</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFaceShowFlg}>on/off</button>
      <p>{num}</p>
      {faceShowFlg && <p>(*´▽｀*)</p>}
    </>
  );
};

export default App;
