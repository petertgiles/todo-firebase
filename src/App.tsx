import "./App.css";

import FirebaseAppProvider from "./providers/firebase/FirebaseAppProvider";
import FirebaseAuthProvider from "./providers/firebase/FirebaseAuthProvider";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <FirebaseAppProvider>
        <FirebaseAuthProvider>
          <div className="flex flex-col">
            <Header />
            <ItemList />
          </div>
        </FirebaseAuthProvider>
      </FirebaseAppProvider>
    </ErrorBoundary>
  );
}

export default App;
