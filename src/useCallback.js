import React, { useState, useCallback } from 'react';



/*
const UseCall = () =>  {
  const [count, setCount] = useState(0);
  
  let x = 0;
  
  const expensiveFunction = useCallback(() => {
     alert("heloo");
     alert(x++);
  }, []);

alert(expensiveFunction);



alert("ex");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>زيادة العداد</button>
      <button onClick={expensiveFunction}>تشغيل الدالة الباهظة الثمن</button>
      <p>العداد: {count}</p>
    </div>
  );
}

export default UseCall;
*/


function UseCallback() {
  
  const [count, setCount] = useState(0);
  
  const expensiveCalculation = useCallback(() => {
    // عملية حسابية معقدة
    return Math.random();
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>زيادة العداد</button>
      <div>الحساب: {expensiveCalculation}</div>
    </div>
  );
}





export default UseCallback;