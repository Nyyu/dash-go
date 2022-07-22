import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Response,
} from "miragejs"

interface User {
  name: string
  email: string
  created_at: string | Date
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        nome(i) {
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
      server.createList("user", 25)
    },

    routes() {
      // this.urlPrefix = "http://localhost:5000" // change url prefix
      this.namespace = "api"

      // Delay
      this.timing = 750

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 }: any =
          request.queryParams

        const data = schema.all("user")
        const total = data.length

        const pageStart =
          (Number(page) - 1) * Number(per_page)
        const pageEnd = pageStart + Number(per_page)

        const users = data.slice(pageStart, pageEnd)

        return new Response(
          200,
          {
            "x-total-count": String(total),
          },
          { users }
        )
      })

      // Shorthand for basic REST operation
      this.get("/users/:id")
      this.post("/users")

      // If you need to use w NextJS you can reset the namespace & passthrough so that next can use it's own Api folder, as following:
      this.namespace = ""
      this.passthrough()
    },
  })

  return server
}
