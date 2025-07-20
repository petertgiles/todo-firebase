import { useState } from "react";
import "./App.css";

import FirebaseAppProvider from "./providers/firebase/FirebaseAppProvider";
import SignInButton from "./components/SignInButton";
import FirebaseAuthProvider from "./providers/firebase/FirebaseAuthProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <FirebaseAppProvider>
      <FirebaseAuthProvider>
        <h1>TODO Webapp</h1>
        <div className="card">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="btn"
          >
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
