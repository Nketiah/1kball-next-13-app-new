"use client";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [authUser, setAuthUser] = useState({});
  const [user, setUser] = useState({email:'', password:''})

  useEffect(() => {
    setAuthUser('the user has been authenticated ')
  }, [user]);


   const userlogin = (userData) => {
    console.log("Hit login ", userData)
  }

   const registerUser = (userData) => {
    setUser(userData)
     console.log("register ", user)
  }


  return (
    <AuthContext.Provider
      value={{
        authUser,
        userlogin,
        registerUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
