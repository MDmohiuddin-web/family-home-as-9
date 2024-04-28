import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "./Firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  //   console.log(children);

  const [user, setUser] = useState(null);
  const [loding, setloding] = useState(true);
  //create user
  // console.log(user)
  const signup = (email, password) => {
    setloding(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login user
  const login = (email, password) => {
    setloding(true);
    // toast.success('signInWithEmailAndPassword success full')
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleloginprovider = new GoogleAuthProvider();
  // google login
  const googleLogin = () => {
    setloding(true);
    // toast.success('signInWithGoogle success full')
    signInWithPopup(auth, googleloginprovider)
      .then((result) => {
        result && toast.success("signInWithGoogle success full");
      })
      .catch((error) => {
        error && toast.error("signInWithGoogle Process Field");
      });
  };
  // update user profile
  const updateUserProfile = (name, image) => {
    setloding(true);
    // toast.success('updateUserProfile success full')
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  //signout
  const logout = async () => {
    try {
      setloding(true);
      await signOut(auth);
      setUser(null);
      toast.error("Sign out successful");
    } catch (error) {
      console.error("Error during sign out:", error);
      toast.warning("Sign out failed");
    }
  };

  //overbear
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setloding(false);
      }
      //  else {
      //   // User is signed out
      //   // ...
      // }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const AuthInfo = {
    user,
    signup,
    login,
    googleLogin,
    updateUserProfile,
    logout,
    loding,
  };

  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
