"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext()


export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();
  const [posts, setPost] = useState(["1", "2"]);

  useEffect(() => {
    setUser({
      name: "Richard Obiri",
      age: 60,
      desc: "this is the bad boy of the ages of the main gest",
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        posts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext)
