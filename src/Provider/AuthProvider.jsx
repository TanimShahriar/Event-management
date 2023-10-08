/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }


  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);

  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("User in the auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe()
    }

  }, [])


  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }



  const authInfo = {
    googleLogin,
    user,
    setUser,
    loading,
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