import { Link } from "react-router";
import { use, } from "react";
import { AuthContext } from "../../Auth/AuthContext";


const SignUp = () => {
  const {createUser} = use(AuthContext);
  

  const handleSignUp =e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email =e.target.email.value;
    const password =e.target.password.value;

    createUser(email, password)
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
      <h1 className="text-5xl font-bold">Sign Up First</h1>
      <p className="py-6">
      Fill up your information according the data input field. Thanks for yor Signup our Website!!
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
        <p className="text-center py-3">Already have an account,plz <Link className="text-primary font-bold  underline" to={'/signin'}>SignIn</Link></p>
      </div>
    </div>
  </div>
</div>
      );
};

export default SignUp;