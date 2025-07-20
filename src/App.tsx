import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import FirebaseAppProvider from "./providers/firebase/FirebaseAppProvider";
import SignInButton from "./components/SignInButton";
import FirebaseAuthProvider from "./providers/firebase/FirebaseAuthProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <FirebaseAppProvider>
      <FirebaseAuthProvider>
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

        <SignInButton />
      </FirebaseAuthProvider>
    </FirebaseAppProvider>
  );
}

export default App;
