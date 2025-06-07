import { Hono } from "hono"
import { record } from "@/server/routes/record"

const app = new Hono().basePath("/api").route("/record", record)

export { app }
