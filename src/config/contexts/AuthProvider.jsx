import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const gooleProvider = new GoogleAuthProvider();
  //  signup function
  const userSignup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login with gmail
  const loginGmail = () => {
    return signInWithPopup(auth, gooleProvider);
  };
  // login with email & password

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout
  const logout = () => {
    return signOut(auth);
  };

  // update profile
  const updateProfile = (name, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // check user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        // User is signed out
        // ...
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    userSignup,
    loginGmail,
    login,
    logout,
    updateProfile,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
