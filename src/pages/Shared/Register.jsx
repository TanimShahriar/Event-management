import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { sendEmailVerification, updateProfile } from "firebase/auth";


const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setSowPassword] = useState(false);

  const { createUser, logOut } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // const accepted = e.target.terms.checked;
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const email = form.get('email')
    const photo = form.get('photo')
    const password = form.get('password')
    const accepted = e.target.terms.checked;
    console.log(email, password, name, photo, accepted);



    setRegisterError('');
    setSuccess('');

    if (password.length < 6) {
      setRegisterError("Password should be at least six character");
      return;
    }

    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
      setRegisterError("At least six characters long,  Contains at least one uppercase letter, Allows special characters")
      return;
    }

    else if (!accepted) {
      setRegisterError("Please accept our terms and conditions")
      return;
    }


    //create User
    createUser(email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('User created successfully');

        logOut(email, password)
          .then()
          .catch()

        updateProfile(result.user, {
          displayName: name,
          photoURL: ""
        })

        // sendEmailVerification(result.user)
        //   .then(() => {
        //     alert("Please check your email and verify your email")
        //   })

      })
      .catch(error => {
        console.log(error.message);
        setRegisterError(error.message);
      })

  }




  return (
    <div className="mt-5">
      <Navbar></Navbar>
      <div className=" max-w-3xl h-[700px] mx-auto p-10 rounded-lg mt-5 bg-emerald-500"  >
        <h2 className="text-center text-4xl font-semibold mb-2">Register your account</h2>

        <form onSubmit={handleRegister} className=" max-w-screen-md mx-auto space-y-4 ">
          <div className="flex flex-col justify-center gap-4">
            <label className="text-xl font-semibold mt-6" htmlFor="">Your Name</label>
            <input className="bg-slate-100  px-4 py-2 rounded" type="text" name="name" placeholder="Enter your name" id="" required />
            <label className="text-xl font-semibold " htmlFor="">Photo URL</label>
            <input className="bg-slate-100  px-4 py-2 rounded" type="text" name="photo" placeholder="Enter photo URL" id="" required />
            <label className="text-xl font-semibold " htmlFor="">Email</label>
            <input className="bg-slate-100  px-4 py-2 rounded" type="email" name="email" placeholder="Enter your email address" id="" required />



            <label className="text-xl font-semibold " htmlFor="">Password</label>

            <div className=" relative">
              <input className="bg-slate-100  px-4 py-2 rounded w-full" type={showPassword ? "text" : "password"}
                name="password" placeholder="Enter your password" id="" required />

              <span onClick={() => setSowPassword(!showPassword)} className="cursor-pointer absolute top-3 right-5"> {showPassword ? <BsFillEyeFill></BsFillEyeFill> : <BsFillEyeSlashFill></BsFillEyeSlashFill>} </span>
            </div>

          </div>
          <div className="flex gap-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="" htmlFor="terms"></label>
            <p className="">Accept <a href=""></a> Terms and Conditions</p>
          </div>
          <input className="bg-blue-600 cursor-pointer text-white px-4 py-2 w-full rounded-md hover:bg-green-700 duration-200" type="submit" value="Register" />
        </form>

        {
          success &&
          <div>
            <h2 className="text-black mt-2 font-semibold">{success}</h2>
          </div>
        }

        {
          registerError &&
          <div>
            <h2 className="text-red-700 font-semibold">{registerError}</h2>
          </div>

        }

        <p className="text-center text-lg font-medium mt-4">Already have an account? Please <Link to='/login' className="text-white font-medium underline">Login</Link></p>

      </div >

    </div >
  );
};

export default Register;