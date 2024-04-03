import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Home = () => {

    const  {authInfo}= useContext(AuthContext);
    return (
        <div>
            <h1>{authInfo}</h1>
        </div>
    );
};

export default Home;