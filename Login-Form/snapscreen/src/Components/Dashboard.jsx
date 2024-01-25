import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Dashboard() {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const buttonStyle = {
    backgroundColor: "#dc3545", 
    color: "#ffffff", 
    padding: "10px 20px", 
    fontSize: "16px", 
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  function handleLogout() {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        setAuthUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  }

  return (
    <div>
      {authUser ? (
        <div>
          <h1>HELLO WORLD</h1>
          <p>Welcome, {authUser.email}!</p>
          <button style={buttonStyle} onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default Dashboard;
