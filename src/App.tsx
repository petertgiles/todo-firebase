import { useState } from "react";
import "./App.css";

import FirebaseAppProvider from "./providers/firebase/FirebaseAppProvider";
import FirebaseAuthProvider from "./providers/firebase/FirebaseAuthProvider";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <FirebaseAppProvider>
      <FirebaseAuthProvider>
        <div className="flex flex-col">
          <Header />
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
        </div>
      </FirebaseAuthProvider>
    </FirebaseAppProvider>
  );
}

export default App;
