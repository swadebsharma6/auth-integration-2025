import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {  useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth/cordova";


const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      // createUser
      const createUser =(email, password)=>{
            return createUserWithEmailAndPassword(auth, email, password);
          
      }
      //signinUser
      const signInUser =(email, password)=>{
            return signInWithEmailAndPassword(auth,email, password)
      }

      //signOut
      const signOutUser =()=>{
            return signOut(auth);
      }
      // observer
      useEffect(()=>{
          const unSubscribe = onAuthStateChanged(auth, currentUser =>{                 
                        console.log('current user', currentUser); 
                        setUser(currentUser);
            });
            return() =>{
                  unSubscribe();
            }

      }, [])

      const userInfo ={
            createUser,
            signInUser,
            signOutUser,
            user,

      }

      return (
            <AuthContext value={userInfo}>
                  {children}
            </AuthContext>
      );
};

export default AuthProvider;