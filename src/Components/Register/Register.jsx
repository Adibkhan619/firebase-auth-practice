import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {

  const {registerUser, setUser} = useContext(AuthContext)
  const [error, setError] = useState('');

    const handleRegister = e => {

        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        
        
        if(password.length < 6){
          setError('Password must be 6 characters long');
          return;
        }
        if(password !== confirmPassword){
          setError('password didnt match');
          return;
        }
        if(!/\d{2}$/.test(password)){
          setError('Password must have two numbers at the last')
          return;
        }
        setError('');

        registerUser(email,password)
        .then(result => {setUser(result.user)})
        .catch(error => console.log('error paisi', error))
        alert('Registration Completed successfully');
    }

    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col gap-6">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
  
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleRegister} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name"  placeholder="Name" className="input input-bordered" required />
        </div>

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

        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" required />
          <p>{error && <small className="text-red-600">{error}</small>}</p>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>

      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;