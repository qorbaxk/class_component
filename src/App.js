import { useState } from 'react';
import './App.css';
import Box from "./component/Box";

function App() {
  let counter = 0;
  //괄호안에 값은 초기값
  //[초기값이 담긴 state, state값을 변경해주는 함수]
  const [counter2, setCounter2] = useState(0);

  const increase = () =>{
    counter = counter + 1;
    setCounter2(counter2+1);
    console.log("counter는?",counter,"counter2는?",counter2);
  };

  //1. 유저가 버튼을 클릭한다
  //2. counter+1 해서 1이 됨
  //3. setState 함수 호출
  //4. console.log 실행됨
  //변수값은 1로 보이고 state값은 아직 안변했기 때문에 그 전에 값이 보인다
  //앱이 다시 리 렌더
  //let counter = 0 을 거치면서 counter 값이 다시 0으로 초기화
  //업데이트된 state 값이 보인다
  //변수는 re render 될때마다 초기화
  //state는 비동기적으로 처리된다
  
  return (
    <div>
     
     <div>{counter}</div>
     <div>state:{counter2}</div>
     <button onClick={increase}>클릭!</button>
      

    </div>
  );
}

export default App;
