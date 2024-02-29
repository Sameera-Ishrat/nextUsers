import { getUser } from "@/app/lib/getUser";
import { getUserPosts } from "@/app/lib/getUserPosts";
import { UserPost } from "@/app/components/userPost";
import Link from "next/link";

import React, { Suspense } from "react";
import NotFound from "./not-found";
import { Metadata } from "next";
import { getAllUsers } from "@/app/lib/getAllUsers";
import { notFound } from "next/navigation";

// This page will list all the posts associated with the user.

type Params = {
  params: {
    userId: string;
  };
};

//generate dynamic metadata for each user

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  if (!user.name) {
      return {
          title: "User Not Found"
      }
  }

  return {
      title: user.name,
      description: `This is the page of ${user.name}`
  }

}

const UserPage = async ({ params: { userId } }: Params) => {
  // request both users and posts associated with the user in parallel
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Posts[]> = getUserPosts(userId);

  //const [user,userPost] = await Promise.all([userData,userPostsData]);
  const user = await userData;
  console.log(user, "user");

  if(!user.name) return notFound();

  return (
    <div>
      <Link href="/users">Back to users page</Link>
      <h2>{user.name}</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <UserPost promise={userPostsData} />
      </Suspense>
    </div>
  );
};

export default UserPage;

export async function generateStaticParams() {
  const userData:Promise<User[]> =  getAllUsers();
  const users = await userData;

  return users.map((user) => ({
    userId: user.id.toString(),
  }))
}
