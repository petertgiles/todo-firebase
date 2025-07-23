import "./App.css";

import FirebaseAppProvider from "./providers/firebase/FirebaseAppProvider";
import FirebaseAuthProvider from "./providers/firebase/FirebaseAuthProvider";
import Header from "./components/Header";
import ItemList from "./components/ItemList";

function App() {
  return (
    <FirebaseAppProvider>
      <FirebaseAuthProvider>
        <div className="flex flex-col">
          <Header />
          <ItemList />
        </div>
      </FirebaseAuthProvider>
    </FirebaseAppProvider>
  );
}

export default App;
