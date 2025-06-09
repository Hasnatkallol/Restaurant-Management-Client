import React, { useContext, useEffect, useRef } from "react";

import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { FirebaseAuthContext } from "../../Firebase/FirebaseAuthContext";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const navigate = useNavigate();
  const emailRef = useRef();
  const { logIn, setUser, setLoading, signInWithGoogle } =
    useContext(FirebaseAuthContext);
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire("Success!", "User logged in successfully", "success");
        navigate(location.state || "/");
      })
      .catch((error) => {
        let message = "";
        switch (error.code) {
          case "auth/user-not-found":
            message = "No account found with this email";
            break;
          case "auth/wrong-password":
            message = "Incorrect Password";
            break;
          case "auth/invalid-email":
            message = "Please enter a valid email address";
            break;
          default:
            message = "Login Failed!";
        }

        Swal.fire("Error", message, "error");
        setLoading(false);
      });
  };

  const singInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        Swal.fire("Success!", "Signed in with Google", "success");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
    <div className="w-11/12 mx-auto my-10 card bg-base-200 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-black font-semibold text-center text-2xl mb-4">
          Login Your Account
        </h1>
        <div className="space-y-3">
          <button onClick={singInGoogle} className="btn w-full btn-outline">
            <FcGoogle size={24} />
            Login With Google
          </button>
        </div>
        <form onSubmit={handleLogin} className="fieldset mt-4">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            ref={emailRef}
            required
          />
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />
          <div className="mt-2">
            <a
              href="https://mail.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-blue-800 underline font-semibold link-hover"
            >
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </form>

        <h1 className="text-black font-semibold text-center mt-4">
          Don't have an account?{" "}
          <Link
            className="text-red-600"
            to={"/register"}
            state={location.state}
          >
            Sign up
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
