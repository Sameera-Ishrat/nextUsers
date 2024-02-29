import React from "react";
import { Metadata } from "next";
import { getAllUsers } from "../lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "List of users",
};


const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllUsers(); // user array is coming from tyes.d.ts
  
  const users = await usersData;
  console.log(users, "users");
  return (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>  
        </li>
      ))}
    </section>
  );
};

export default UsersPage;
