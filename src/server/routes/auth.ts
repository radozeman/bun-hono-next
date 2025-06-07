import { Hono } from "hono"
import { auth as betterAuthCore } from "@/auth"

import { type AuthType } from "@/auth"

const auth = new Hono<{ Bindings: AuthType }>()

auth.on(["POST", "GET"], "/auth/*", (c) => {
  return betterAuthCore.handler(c.req.raw)
})

export { auth }
