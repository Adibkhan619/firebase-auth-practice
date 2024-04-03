import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {

  const user = useContext(AuthContext);
  console.log(user);

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password)
  }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col gap-6">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">



      <form onSubmit={handleLogin} className="card-body">       

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>

        

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>

      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;