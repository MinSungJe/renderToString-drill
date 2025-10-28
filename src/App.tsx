import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>renderToString 확인용 카운터</p>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)} />
    </div>
  );
}

export default App;
