import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Auth/AuthContext";


const SignIn = () => {
  const {signInUser}= use(AuthContext)

  const handleLogin =e =>{
    e.preventDefault();
    const email =e.target.email.value;
    const password =e.target.password.value;

    // signinUser
    signInUser(email, password)
    .then(result =>{
      console.log(result.user);
      
    })
    .catch(error =>[
      console.log(error.message)
    ])

    

  }

      return (
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign In Again</h1>
      <p className="py-6">
      Fill up your information according the data input field. Thanks for yor Signup our Website!!
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </form>
        <p className="text-center py-3">New, this site ? <Link className="text-primary font-bold  underline" to={'/signup'}>Sign Up </Link> First.</p>
      </div>
    </div>
  </div>
</div>
      );
};

export default SignIn;