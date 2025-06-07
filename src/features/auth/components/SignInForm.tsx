"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/features/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/features/ui/components/card"
import { GithubLogo } from "./GithubLogo"
import { signIn } from "@/features/auth/fn/index"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome!</CardTitle>
          <CardDescription>Login with your Github account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="w-full" onClick={signIn}>
                <GithubLogo />
                Sign In with Github
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
