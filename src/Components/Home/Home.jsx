import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Home = () => {

    const user = useContext(AuthContext);
    return (
        <div>
            <h1>{user}</h1>
        </div>
    );
};

export default Home;