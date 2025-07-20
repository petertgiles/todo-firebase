import { useContext } from 'react';
import FirebaseAppContext from './FirebaseAppContext';
import FirebaseAuthContext from './FirebaseAuthContext';

export const useFirebaseApp = () => {
  return useContext(FirebaseAppContext);
}

export const useFirebaseAuth = () => {
  return useContext(FirebaseAuthContext);
}