import { createServer, Factory, Model } from "miragejs"

interface User {
  name: string
  email: string
  created_at: string | Date
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i) {
          return `user ${i + 1}`
        },
        email(i) {
          return `user${i + 1}@gmail.com`
        },
        createdAt(i) {
          return `${new Date()}`
        },
      }),
    },

    seeds(server) {
      server.createList("user", 5)
    },

    routes() {
      // this.urlPrefix = "http://localhost:5000" // change url prefix
      this.namespace = "api"

      // Delay
      this.timing = 750

      // Shorthand for basic REST operation
      this.get("/users")
      this.post("/users")

      // If you need to use w NextJS you can reset the namespace & passthrough so that next can use it's own Api folder, as following:
      this.namespace = ""
      this.passthrough()
    },
  })

  return server
}