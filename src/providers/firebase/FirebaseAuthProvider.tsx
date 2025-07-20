import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { useFirebaseApp } from "./hooks";

import { useEffect, useState, type ReactNode } from "react";
import FirebaseAuthContext from "./FirebaseAuthContext";

const FirebaseAuthProvider = ({ children }: { children: ReactNode }) => {
  const { app } = useFirebaseApp();

  const auth = getAuth(app ?? undefined);

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.debug("onAuthStateChanged");
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <FirebaseAuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
