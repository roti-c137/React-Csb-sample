import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [merchantDetail, setMerchantDetail] = useState({});
  const [productData, setProductData] = useState([]);

  function getMerchantDetail() {
    setMerchantDetail({ id: "MBB100" });
    // setProductData([id:])
  }

  useEffect(() => {
    getMerchantDetail();
  }, []);

  return <div className="App"></div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
