import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    document.title = text;
    console.log("Resets when text changes")
  }, [text])

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
    console.log("Resets once")
  }, []);

  // useEffect(() => {
  //   document.title = text
  //   console.log("useEffect called");
  //   setTimeout(() => setCount(0), 5000);


  // }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>I've been clicked {count} times</button>;
      <input
        type="text"
        placeholder="Type type"
        value={text}
        onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default App;
