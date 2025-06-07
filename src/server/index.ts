import { Hono } from "hono"

import { type AuthType } from "@/auth"

import { auth } from "@/server/routes/auth"
import { record } from "@/server/routes/record"

const app = new Hono<{ Variables: AuthType }>()

const routes = [auth, record] as const

routes.forEach((route) => {
  app.basePath("/api").route("/", route)
})

export { app }
