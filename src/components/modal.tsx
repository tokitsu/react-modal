export const Modal = (props) => {
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

  if (props.show) {
    return (
      <div className="App">
        <div style={overlayStyle}>
          <div style={contentStyle}>
            <p>これがモーダルウィンドウです。</p>
            <p>
              <button onClick={() => setShow(true)}>close</button>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
