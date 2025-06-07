import { Hono } from "hono"

const record = new Hono()

record.get("/", (c) => c.text("ALL RECORDS GET"))

record.get("/:id", (c) => {
  const id = c.req.param("id")
  return c.text("RECORD DETAIL, ID: " + id)
})

record.post("/", (c) => c.text("CREATE RECORD POST"))

export { record }
