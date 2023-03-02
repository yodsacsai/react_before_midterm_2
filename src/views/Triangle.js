import React, { useState, useEffect } from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

function Triangle() {
  const [areaTriangle, setAreaTriangle] = useState(0);
  const [bases, setBases] = useState(0);
  const [highs, setHighs] = useState(0);

  useEffect(() => {
    calTriangleArea();
  }, [bases, highs]);

  const handleChangฺBases = (e) => {
    e.target.value === "" ? setBases(0) : setBases(e.target.value);
  };

  const handleChangeHighs = (e) => {
    e.target.value === "" ? setHighs(0) : setHighs(e.target.value);
  };

  const calTriangleArea = () => {
    setAreaTriangle((parseFloat(bases) * parseFloat(highs) / 2).toFixed(2));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <HeaderComp />
      <h3>คำนวณพื้นที่สามเหลี่ยม</h3>
      ป้อนฐาน : <input type="number" onChange={handleChangฺBases} />
      <br /> <br />
      ป้อนสูง : <input type="number" onChange={handleChangeHighs} />
      <br /> <br />
      <button onClick={calTriangleArea}>คำนวณพื้นที่สี่เหลี่ยม</button>
      <br /> <br />
      พื้นที่สามเหลี่ยมเป็น : {areaTriangle}
      <FooterComp />
    </div>
  );
}

export default Triangle;
