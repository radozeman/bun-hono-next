import { env } from "@/env/server"
import { neon, neonConfig } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import ws from "ws"

neonConfig.webSocketConstructor = ws

const sql = neon(env.DATABASE_URL)

const db = drizzle({ client: sql })

export { db }
