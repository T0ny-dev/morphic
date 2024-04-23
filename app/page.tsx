'use client'
import { Chat } from '@/components/chat';
import { Hero } from "@/components/hero"
import { useUser } from "@auth0/nextjs-auth0/client";




export const runtime = 'edge';

export default function Page() {

  const { user } = useUser();

  return (
    <>
      {!user && (<Hero />)}
      {user && (<Chat />)}
    </>
  );
}


