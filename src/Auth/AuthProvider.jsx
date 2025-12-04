import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {  useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth/cordova";


const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      // createUser
      const createUser =(email, password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
            
          
      }

      //Google sign in
      const provider = new GoogleAuthProvider();

      const googleSignIn =()=>{
            setLoading(true);
            return signInWithPopup(auth, provider)
      }

      //signinUser
      const signInUser =(email, password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email, password);
             
      }

      //signOut
      const signOutUser =()=>{
             setLoading(true);
            return signOut(auth);
            
      }
      // observer
      useEffect(()=>{
          const unSubscribe = onAuthStateChanged(auth, currentUser =>{                 
                        console.log('current user', currentUser); 
                        setUser(currentUser);
                        setLoading(false)
            });
            return() =>{
                  unSubscribe();
            }

      }, [])

      const userInfo ={
            createUser,
            signInUser,
            signOutUser,
            googleSignIn,
            user,
            loading,

      }

      return (
            <AuthContext value={userInfo}>
                  {children}
            </AuthContext>
      );
};

export default AuthProvider;