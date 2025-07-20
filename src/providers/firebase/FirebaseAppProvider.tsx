import { useState, type ReactNode } from "react";
import FirebaseAppContext from "./FirebaseAppContext";
import { initializeApp, type FirebaseApp } from "firebase/app";

const FirebaseAppProvider = ({ children }: { children: ReactNode }) => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAKGv9ycTm2-HcP20gHPrKbJPVQAa_nxh4",
    authDomain: "petertgiles-todo.firebaseapp.com",
    projectId: "petertgiles-todo",
    storageBucket: "petertgiles-todo.firebasestorage.app",
    messagingSenderId: "982994779941",
    appId: "1:982994779941:web:ef36b1835a800f5fda64cc",
  };
  // Initialize Firebase
  const [app, _] = useState<FirebaseApp>(() => {
    console.debug("Initialize Firebase app.");
    return initializeApp(firebaseConfig);
  });

  return (
    <FirebaseAppContext.Provider value={{ app: app }}>
      {children}
    </FirebaseAppContext.Provider>
  );
};

export default FirebaseAppProvider;
