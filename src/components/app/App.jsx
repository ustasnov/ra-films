import { useState } from 'react';
import Stars from "../stars/Stars";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handler = ev => setCount(ev.currentTarget.value);

  return (
    <div className="stars-container">
      <div className="rating-container">
        <label htmlFor="rating">Рейтинг:</label>
        <input id="rating" className="rating-input" name="num" type="number" value={count} onInput={handler}></input>
      </div>
      <Stars count={count} />
    </div>
  )
}

export default App

