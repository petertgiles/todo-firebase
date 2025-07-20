import type { FirebaseApp } from "firebase/app";
import { createContext } from "react";

export interface FirebaseAppContextValue {
  app: FirebaseApp | null;
}

const FirebaseAppContext = createContext<FirebaseAppContextValue>({
  app: null,
});

export default FirebaseAppContext;
