import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext, auth } from "../../Provider/AuthProvider";
import { useState } from "react";
import { useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
// import { getAuth } from "firebase/auth";

const Login = () => {

  const [loginError, setLoginError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef(null);
  // const auth = getAuth();
  const { signIn } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    console.log(email, password);

    setLoginError('');
    setSuccess('');

    signIn(email, password)
      .then(result => {
        console.log(result.user);
        if (result.user.emailVerified) {
          setSuccess("User logged in successfully");
        } else {
          alert("Please verify your email address");
        }

      })
      .catch(error => {
        console.error(error.message);
        setLoginError(error.message);
      })

  }


  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("sent reset email", emailRef.current.value);
      return;

    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      console.log("Please provide valid email");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email")
      })
      .catch(error => {
        console.log(error.message)
      })
  }




  return (
    <div className="mt-5 ">
      <Navbar></Navbar>
      <div className=" max-w-3xl h-[600px] mx-auto p-10 px-16 rounded-lg mt-10 bg-slate-100">
        <h2 className="text-center text-4xl font-semibold mt-5 mb-7 text-[#403F3F] ">Login to your account</h2> <hr />
        <form onSubmit={handleLogin} className=" max-w-screen-md mx-auto space-y-4 ">
          <div className="flex flex-col justify-center gap-4 ">
            <label className="text-xl font-semibold mt-6" htmlFor="">E-mail Address</label>
            <input className="px-4 py-4 rounded" type="email" name="email" ref={emailRef} placeholder="Enter your email address" id="" required />
            <label className="text-xl font-semibold" htmlFor="">Password</label>
            <input className="px-4 py-4 rounded" type="password" name="password" placeholder="Enter your password" id="" required />

          </div>

          <p>Forgot password? <span onClick={handleResetPassword} className="cursor-pointer text-cyan-700 underline">Reset password</span></p>

          <input className="bg-green-600 cursor-pointer text-white px-4 py-4 w-full rounded-md hover:bg-blue-600 duration-200" type="submit" value="Login" />

          <p className="text-center mt-4 text-lg font-medium">Don t Have an Account? <Link to='/register' className="text-red-600 font-medium">Register</Link></p>
        </form>

        {
          loginError &&
          <div>
            <h2 className="text-lg text-center font-semibold text-red-700">{loginError}</h2>
          </div>
        }

        {
          success &&
          <div>
            <h2 className="text-lg text-center font-semibold text-green-700">{success}</h2>
          </div>
        }

      </div>



    </div>
  );
};

export default Login;