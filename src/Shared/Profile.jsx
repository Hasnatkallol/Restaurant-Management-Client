import React, { useContext, useEffect } from "react";


import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";

const Profile = () => {
  const { user, theme } = useContext(FirebaseAuthContext);


  useEffect(() => {
    document.title = "My Profile";
  }, []);

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <div className="min-h-screen transition-colors duration-300"
           style={{ 
             backgroundColor: "var(--color-primary)", 
             color: "var(--color-base-content)" 
           }}
      >
        <div className="container mx-auto px-0 lg:px-4 py-8">
          <div className="max-w-3xl mx-auto rounded-xl shadow-md overflow-hidden p-6 md:p-8 transition-all duration-300"
               style={{ backgroundColor: "var(--color-base-100)" }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-opacity-20"
                   style={{ borderColor: "var(--color-secondary)" }}
              >
                <img
                  src={user?.photoURL || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              </div>

              <div className="text-center md:text-left flex-1">
                <h1 className="text-2xl md:text-3xl font-bold mb-2"
                    style={{ color: "var(--color-accent)" }}
                >
                  {user?.displayName || "User Profile"}
                </h1>
                <p className="text-lg mb-4"      style={{ color: "var(--color-accent)" }}>
                  {user?.email}
                </p>

             
              </div>
            </div>

            <div
              className="mt-8 pt-6 border-t border-opacity-20"
              style={{ borderColor: "var(--color-neutral)" }}
            >
              <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--color-accent)" }}>
                Account Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm"      style={{ color: "var(--color-accent)" }}>
                    Account Created
                  </p>
                  <p>{new Date(user?.metadata?.creationTime).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm"      style={{ color: "var(--color-accent)" }}>
                    Last Sign In
                  </p>
                  <p>{new Date(user?.metadata?.lastSignInTime).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm"      style={{ color: "var(--color-accent)" }}>
                    Email Verified
                  </p>
                  <p>{user?.emailVerified ? "Yes" : "No"}</p>
                </div>
                <div>
                  <p className="text-sm"      style={{ color: "var(--color-accent)" }}>
                    User ID
                  </p>
                  <p className="truncate">{user?.uid}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
