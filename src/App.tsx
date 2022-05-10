import "./styles.css";
import { useState } from "react";

const overlayStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",

  /*　画面の中央に要素を表示させる設定　*/
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const contentStyle = {
  zIndex: "2",
  width: "50%",
  padding: "1em",
  background: "#fff"
};

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <h1>モダール</h1>
      <button onClick={() => setShow(true)}>モダールを開く</button>
      <Modal show={show} setShow={setShow} />
    </div>
  );
}

export const Modal = (props) => {
  const { show, setShow } = props;

  if (show) {
    return (
      <div className="App">
        <div style={overlayStyle}>
          <div style={contentStyle}>
            <p>これがモーダルウィンドウです。</p>
            <p>
              <button onClick={() => setShow(false)}>閉じる</button>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
