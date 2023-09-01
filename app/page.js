'use client';
import { getServerSession } from "next-auth";
import { authOptions } from './api/auth/[...nextauth]/route'
import { useSession } from "next-auth/react";
import Sidebar from './components/Sidebar'

export default function Home() {
  const { data } = useSession();
  return (
    <main className='p-8'>
      <Sidebar />
    </main>
  )
}
