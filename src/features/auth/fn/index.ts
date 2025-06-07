import { authClient } from "@/auth/authClient"
import { redirect } from "next/navigation"

const signIn = async () => {
  await authClient.signIn.social({
    provider: "github",
  })
}

const signOut = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        redirect("/signin")
      },
    },
  })
}

export { signIn, signOut }
