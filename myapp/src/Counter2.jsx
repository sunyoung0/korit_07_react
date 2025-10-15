import "./App.css";
import { useEffect, useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // counter2 호출했을때 useEffect는 호출됐지만 argument는 호출이 안됨.
  // 현재 []가 비어있기 때문에 어떤 상황에서 발생 시킬지 정해져있지 않음. 그래서 useEffect는 호출 되지만 아무런 일이 발생하지 않음
  // 현재 코드 : count2 값이 바뀔때마다 callback function을 호출
  // return에는 count2 값을 증가해주는 부분이 없기 때문에 callback function 호출이 안됨.
  useEffect(() => {
    console.log("Hello ! Change the state, count2 !");
  }, [count2]);

  return (
    <>
      <p>Counter2 : {count}</p>
      <button onClick={() => setCount((preCount) => preCount + 1)}>증가</button>
    </>
  );
}

export default Counter2;
