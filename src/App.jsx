import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0); 

  const incrementCount = () => {
    setCount(count + 1);
  };

  
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", backgroundColor: "" }}>
      <h1 style={{ color: "red", fontFamily: "sans-serif", fontSize: "80px" }}>{count}</h1>
      <button onClick={incrementCount} style={{ marginRight: "10px", marginTop: "50px", padding: " 15px 40px",backgroundColor: "blue",color: "#fff",border: "none", borderRadius: "12px" }}>
        bosish
      </button>
      <button onClick={resetCount} style={{padding: " 15px 40px", backgroundColor: "blue", color: "#fff", border: "none" , borderRadius: "12px"}}>ochirish</button>
    </div>
  );
}

export default CounterApp;
