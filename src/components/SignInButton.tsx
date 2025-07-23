import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useFirebaseApp, useFirebaseAuth } from "../providers/firebase/hooks";

const SignInButton = () => {
  const { app } = useFirebaseApp();
  const { currentUser } = useFirebaseAuth();
  const auth = getAuth(app ?? undefined);
  const provider = new GoogleAuthProvider();

  const tryLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.debug("signInWithPopup success", result.user);
      })
      .catch((error) => {
        console.debug("signInWithPopup failure", error);
      });
  };

  const label = currentUser ? currentUser.displayName : "Login";
  const handleClick = currentUser ? () => auth.signOut() : () => tryLogin();

  return (
    <button type="button" onClick={handleClick} className="btn btn-blue">
      {label}
    </button>
  );
};

export default SignInButton;
