'use client';
 import Image from 'next/image'
 import { signIn, signOut, useSession } from 'next-auth/react'
 import Nav from './Nav'

export default function Layout({ children}) {
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

    <div className="bg-blue-200 min-h-screen flex ">
      <Nav />
    <div className = "bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4 ">
        {children}
    </div>
    </div>
  );
}
