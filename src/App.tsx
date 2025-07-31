import "./App.css";

import FirebaseAppProvider from "./providers/firebase/FirebaseAppProvider";
import FirebaseAuthProvider from "./providers/firebase/FirebaseAuthProvider";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

function fallbackRender({ error }: FallbackProps) {
  console.debug("fallbackRender", error);
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error}</pre>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <FirebaseAppProvider>
        <FirebaseAuthProvider>
          <div className="flex flex-col">
            <Header />
            <ErrorBoundary fallbackRender={fallbackRender}>
              <ItemList />
            </ErrorBoundary>
          </div>
        </FirebaseAuthProvider>
      </FirebaseAppProvider>
    </ErrorBoundary>
  );
}

export default App;
