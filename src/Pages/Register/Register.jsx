import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { FirebaseAuthContext } from "../../Firebase/FirebaseAuthContext";

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
    <div>
      <div className="w-11/12 mx-auto my-10 card bg-base-200 max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-black font-semibold text-center text-2xl">
            Register Your Account
          </h1>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo link"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
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

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            {/* You can keep these for fallback */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">Successfully Signed Up</p>
            )}
          </form>
          <div>
            <button
              onClick={singInGoogle}
              className="btn w-full btn-outline mt-4"
            >
              <FcGoogle size={24} />
              Sign Up With Google
            </button>
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
  );
};

export default Register;
