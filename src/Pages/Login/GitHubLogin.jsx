import React, { useContext, useState } from "react";
import { FirebaseAuthContext } from "../../Firebase/FirebaseAuthContext";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const GitHubLogin = () => {
  const { signInWithGithub, setUser, setLoading } =
    useContext(FirebaseAuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGitHubLogin = async () => {
    setIsLoading(true);
    setLoading(true);

    try {
      const result = await signInWithGithub();
      setUser(result.user);

      Swal.fire("Success!", "Signed in with GitHub successfully!", "success");
      navigate(location.state || "/");
    } catch (error) {
      console.error("GitHub Login Error:", error);
      Swal.fire("Error", error.message || "GitHub login failed", "error");
    } finally {
      setIsLoading(false);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGitHubLogin}
      disabled={isLoading}
      className={`btn w-full flex items-center justify-center gap-2 text-white transition-all duration-200 ${
        isLoading ? "opacity-75 cursor-not-allowed" : "hover:scale-[1.01]"
      }`}
      style={{
        backgroundColor: "#161A20",
      }}
    >
      {isLoading ? (
        <div className="h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
      ) : (
        <>
          <FaGithub size={20} />
          Sign In With GitHub
        </>
      )}
    </button>
  );
};

export default GitHubLogin;
