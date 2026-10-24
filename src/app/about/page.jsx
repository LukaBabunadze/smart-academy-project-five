"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://petstore.swagger.io/v2/user/IceCream",
      );
      const result = await response.json();
      setUser(result);
    } catch (error) {
      alert("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleDeleteUser = async () => {
    const response = await fetch(
      "https://petstore.swagger.io/v2/user/IceCream",
      {
        method: "DELETE",
      },
    );

    if (!response.ok) {
      alert("Failed to delete user");
      return;
    }

    const result = await response.json();
    if (result.code === 200) {
      alert("User deleted successfully");
      setUser(null);
    } else {
      alert("Failed to delete user");
    }
  };

  const handleUserLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  }

  if (user === null) {
    return <div>Loading user data...</div>;
  }
  return (
    <div>
      <h1>{user.username}</h1>
      <p>Email: {user.email}</p>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={handleDeleteUser}>delete</button>
      <button onClick={handleUserLogout}>log out</button>
    </div>
  );
}

export default page;
