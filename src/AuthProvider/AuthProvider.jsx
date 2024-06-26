import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Components/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
        
    }
    
    const authInfo = {
        registerUser, 
        loginUser,
        user, 
        setUser
    }

    // console.log(children);


    return (
        <div>
            {
               <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider> 
            }
        </div>
    );
};

export default AuthProvider;