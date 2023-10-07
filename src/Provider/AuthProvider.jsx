/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
export const auth = getAuth(app);


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }


  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);

  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("User in the auth state change", currentUser);
      setUser(currentUser)
    });
    return () => {
      unSubscribe()
    }

  }, [])


  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const gitHubLogin = () => {
    return signInWithPopup(auth, gitHubProvider)

  }

  const authInfo = {
    googleLogin,
    gitHubLogin,
    user,
    createUser,
    signIn,
    logOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;