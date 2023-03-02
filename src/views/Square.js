import React,{useState, useEffect} from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

function Square() {

  const [areaSquare, setAreaSquare] = useState(0)
  const [widths, setWidths] = useState(0)
  const [longs, setLongs] = useState(0)

  useEffect(() => {
    calSquareArea();
  }, [widths, longs]);

  const handleChangWidths = (e) => {
    e.target.value === "" ? setWidths(0) : setWidths(e.target.value);
  };

  const handleChangeLongs = (e) => {
    e.target.value === "" ? setLongs(0) : setLongs(e.target.value);
  };

  const calSquareArea = () => {
    setAreaSquare(
      (parseFloat(widths) * parseFloat(longs)).toFixed(2)
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <HeaderComp />
      <h3>คำนวณพื้นที่สี่เหลี่ยม</h3>
      ป้อนกว้าง : <input type="number" onChange={handleChangWidths} />
      <br />
      <br />
      ป้อนยาว : <input type="number" onChange={handleChangeLongs}/>
      <br />
      <br />
      <button onClick={calSquareArea}>คำนวณพื้นที่สี่เหลี่ยม</button>
      <br />
      <br />
      พื้นที่สี่เหลี่ยมเป็น : {areaSquare}
      <FooterComp />
    </div>
  );
}

export default Square;
