"use client";
 import Image from 'next/image'
 import { signIn, signOut, useSession } from 'next-auth/react'
 import Nav from '@/components/Nav'

export default function Home() {
  const { data: session } = useSession();
  if(!session){
    return (
        <div className="bg-blue-100 w-screen h-screen flex justify-center items-center">
          <div className="text-center w-full">
            <button onClick={() => signIn('google')} className="bg-white p-3 px-4 rounded-lg"> Login with Google </button>
          </div>
        </div>
    );
  }

  return (
    <div className="bg-blue-100 min-h-screen ">
      <Nav />
    <div>
      <b>
        Congratulations!!🥱🎉 {session.user.email} 
      </b>
      <br />
        You are logged but sadly we won't sell you shit.
    </div>
    </div>
  );
}
