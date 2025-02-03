import React, { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import { Login, Logout } from "../../auth/LoginOut";


export default function Connect() {
  const { user } = useAuth();
    return (
        <div>
            {user ? (
        <>
          <p>Bienvenue {user.username}</p>
        </>
      ) : (
        <Login />
      )}
        </div>
    );
}