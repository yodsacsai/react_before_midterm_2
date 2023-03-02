import React, {useEffect, useState} from 'react'
import FooterComp from '../components/FooterComp'
import HeaderComp from '../components/HeaderComp'

function Circle() {
  const [areaCircle, setAreaCircle] = useState(0)
  const [radius, setRadius] = useState(0)

  useEffect(()=>{
    calCircleArea();
  },[radius])

  const handleChangeRadius = (e) => { 
    e.target.value === "" ? setRadius(0) : setRadius(e.target.value)
  }

  const calCircleArea = () => {         
    setAreaCircle((Math.PI * parseFloat(radius) * parseFloat(radius)).toFixed(2))
  }

  return (
    <div style={{textAlign:'center'}}>
      <HeaderComp/>
      <h3>คำนวณพื้นที่วงกลม</h3>
      ป้อนรัศมี : <input type="number" onChange={handleChangeRadius}/>
      <br/><br/>
      <button onClick={calCircleArea}>คำนวณพื้นที่วงกลม</button>
      <br/><br/>
      พื้นที่วงกลมเป็น : {areaCircle}
      <FooterComp/>
    </div>
  )
}

export default Circle