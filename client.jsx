import { createHttpLink } from "apollo-link-http"
import ApolloClient from "apollo-boost"

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://jsonplaceholder.typicode.com/todos/1" }),
  method: 'GET'
})


export { client }
export default { client }