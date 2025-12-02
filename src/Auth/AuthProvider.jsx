import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth/cordova";


const AuthProvider = ({children}) => {

      // createUser
      const createUser =(email, password)=>{
            return createUserWithEmailAndPassword(auth, email, password);
      }

      //signinUser
      const signInUser =(email, password)=>{
            return signInWithEmailAndPassword(auth,email, password)
      }
      // observer
      useEffect(()=>{
            onAuthStateChanged(auth, currentUser =>{
                  
                  if(currentUser){
                        console.log('current user', currentUser)
                  }
                  else{
                        console.log(currentUser)
                  }
            });

      }, [])

      const userInfo ={
            createUser,
            signInUser
      }

      return (
            <AuthContext value={userInfo}>
                  {children}
            </AuthContext>
      );
};

export default AuthProvider;