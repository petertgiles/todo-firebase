import type { User } from "firebase/auth";
import { createContext } from "react";

export interface FirebaseAuthContextValue {
  currentUser: User | null;
}

const FirebaseAuthContext = createContext<FirebaseAuthContextValue>({
  currentUser: null,
});

export default FirebaseAuthContext;
