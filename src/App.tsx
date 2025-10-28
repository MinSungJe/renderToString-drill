import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []); // 2. 클라이언트 전용 훅

  return (
    <>
      <div id="main">
        <p>renderToString 확인용 카운터</p>
        <p>{count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>
          1. 직렬화를 할 수 없는 요소(이벤트 핸들러)
        </button>
        <CustomElement
          click={() => {
            console.log('test');
          }}
        />
      </div>
    </>
  );
}

function CustomElement({ click }: { click: () => void }) {
  return (
    <div>
      <button>요소 확인</button>
      <p>{JSON.stringify(click)}</p>
    </div>
  );
}

export default App;
