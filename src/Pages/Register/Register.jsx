import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import animation from "../../assets/Register/register.json";

import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { FirebaseAuthContext } from "../../Firebase/FirebaseAuthContext";
import Lottie from "lottie-react";
import GitHubLogin from "../Login/GitHubLogin";

const Register = () => {
  useEffect(() => {
    document.title = "SignUp";
  }, []);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, signInWithGoogle, user, setUser, setLoading } =
    useContext(FirebaseAuthContext);

  const handleRegister = (e) => {
    setLoading(true);
    setSuccessMessage(false);
    setErrorMessage("");
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/(?=.*\d)/.test(password)) {
      Swal.fire(
        "Weak Password",
        "Password must contain at least one number.",
        "warning"
      );
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      Swal.fire(
        "Weak Password",
        "Password must contain at least one lowercase letter.",
        "warning"
      );
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      Swal.fire(
        "Weak Password",
        "Password must contain at least one uppercase letter.",
        "warning"
      );
      return;
    }
    if (!/.{8,}/.test(password)) {
      Swal.fire(
        "Weak Password",
        "Password must be at least 8 characters long.",
        "warning"
      );
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccessMessage(true);
        Swal.fire("Success!", "Successfully registered!", "success");
        setLoading(false);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.error(error);
        setUser(user);
        setErrorMessage(error.message);
        Swal.fire("Error", error.message, "error");
        setLoading(false);
      });
  };

  const singInGoogle = () => {
    setSuccessMessage(false);

    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        setSuccessMessage(true);
        Swal.fire("Success!", "Signed up with Google successfully!", "success");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
  <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center  gap-6">
  
  <div className="w-full md:w-1/2 flex justify-center">
    <div className=" w-full max-w-md p-6 rounded-lg shadow-lg">
      <div className="card-body">
        <h1 className="text-black font-semibold text-center text-2xl mb-4">
          Register Your Account
        </h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input w-full"
              placeholder="Photo link"
              required
            />
          </div>
          <div>
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="btn bg-[#161A20] text-white w-full mt-2">
            Register
          </button>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && (
            <p className="text-green-500">Successfully Signed Up</p>
          )}
        </form>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t"></div>
              <span className="mx-4 text-sm">OR CONTINUE WITH</span>
              <div className="flex-grow border-t"></div>
            </div>

        <div className="mt-4">
          <button
            onClick={singInGoogle}
            className="btn w-full btn-outline flex items-center justify-center gap-2"
          >
            <FcGoogle size={24} />
            Sign Up With Google
          </button>
        </div>
             <div className="mt-4">
         <GitHubLogin></GitHubLogin>
        </div>

        <h1 className="text-black font-semibold text-center mt-4">
          Already have an account?{" "}
          <Link className="text-red-600" to={"/login"}>
            Login
          </Link>
        </h1>
      </div>
    </div>
  </div>

  <div className="w-full md:w-1/2 flex justify-center items-center">
    <Lottie
      animationData={animation}
      loop={true}
      className="w-full hidden md:block max-w-md"
    />
  </div>
</div>
  );
};

export default Register;


