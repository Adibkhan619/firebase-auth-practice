import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Components/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const registerUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
    }
    
    const loginUser = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
    }
    
    const authInfo = {
        registerUser, loginUser
    }

    console.log(children);


    return (
        <div>
            {
               <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider> 
            }
        </div>
    );
};

export default AuthProvider;