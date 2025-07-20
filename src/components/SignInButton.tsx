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
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.debug("success!", user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.debug("failure!", error);
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
