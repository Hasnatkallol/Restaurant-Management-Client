import React, { useEffect, useState } from "react";
import { FirebaseAuthContext } from "./FirebaseAuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.init";
import axios from "axios";

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      if (currentUser?.email) {
        const userInfo = { email: currentUser?.email };
        console.log(userInfo);
        try {
          const fetchData = async () => {
            const res = await axios.post(
              "http://localhost:4000/create-token",
              userInfo,
              { withCredentials: true }
            );
            const data = await res?.data;
            console.log("Create token response from server:", data);
            setLoading(false);
          };
          fetchData();
        } catch (err) {
          console.error(err);
          // toast.error(err?.message);
        }
      } else {
        try {
          const fetchData = async () => {
            const res = await axios.post("http://localhost:4000/logout");
            const data = await res?.data;
            // console.log('Logout response from server:', data);
            setLoading(false);
          };
          fetchData();
        } catch (err) {
          console.error(err);
          // toast.error(err?.message);
        }
      }

      // setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const userInfo = {
    createUser,
    logIn,
    user,
    logOut,
    setUser,
    signInWithGoogle,
    loading,
    setLoading,
    theme,
    setTheme,
  };

  return <FirebaseAuthContext value={userInfo}>{children}</FirebaseAuthContext>;
};

export default FirebaseProvider;
