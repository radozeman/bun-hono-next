"use client"

import { authClient } from "@/auth/authClient"
import { signOut } from "@/features/auth/fn"
import { Button } from "@/features/ui/components/button"
import { LogOut } from "lucide-react"

export default function Home() {
  const { data: session, isPending, error } = authClient.useSession()

  if (isPending) return "Loading..."

  if (error) {
    console.log(error)
    return <div>ERROR SOMETHING WENT WRONG</div>
  }

  return (
    <div className="h-svh w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl mb-12">Welcome {session?.user.name}!</h1>
      <Button variant="outline" onClick={signOut}>
        <LogOut />
        Sign Out
      </Button>
    </div>
  )
}
