import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { initializeApp } from "firebase/app";

function App() {
  const [count, setCount] = useState(0);

  // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyAKGv9ycTm2-HcP20gHPrKbJPVQAa_nxh4",
  //   authDomain: "petertgiles-todo.firebaseapp.com",
  //   projectId: "petertgiles-todo",
  //   storageBucket: "petertgiles-todo.firebasestorage.app",
  //   messagingSenderId: "982994779941",
  //   appId: "1:982994779941:web:ef36b1835a800f5fda64cc",
  // };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TODO Webapp</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
