import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import {
  auth,
  googleProvider,
  db,
} from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // ==========================================
  // CREATE USER IN FIRESTORE
  // ==========================================

  const createUserIfNotExists =
    async (firebaseUser) => {

      const userRef = doc(
        db,
        "users",
        firebaseUser.uid
      );

      const userSnap =
        await getDoc(userRef);

      // NEW USER
      if (!userSnap.exists()) {

        await setDoc(userRef, {
          uid: firebaseUser.uid,

          name:
            firebaseUser.displayName ||
            "Trader",

          email: firebaseUser.email,

          balance: 100000,

          xp: 0,

          holdings: {},

          createdAt:
            new Date(),

        });

        // Empty trades collection automatically
      }
    };

  // ==========================================
  // AUTH STATE
  // ==========================================

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (currentUser) => {

          if (currentUser) {

            // IMPORTANT
            await createUserIfNotExists(
              currentUser
            );
          }

          setUser(currentUser);

          setLoading(false);
        }
      );

    return () => unsubscribe();

  }, []);

  // ==========================================
  // LOGIN
  // ==========================================

  const login = async (
    email,
    password
  ) => {

    const result =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    await createUserIfNotExists(
      result.user
    );

    return result;
  };

  // ==========================================
  // REGISTER
  // ==========================================

  const register = async (
    email,
    password
  ) => {

    const result =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    await createUserIfNotExists(
      result.user
    );

    return result;
  };

  // ==========================================
  // GOOGLE SIGN IN
  // ==========================================

  const signInWithGoogle =
    async () => {

      const result =
        await signInWithPopup(
          auth,
          googleProvider
        );

      await createUserIfNotExists(
        result.user
      );

      return result;
    };

  // ==========================================
  // LOGOUT
  // ==========================================

  const logout = () =>
    signOut(auth);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        signInWithGoogle,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);