import React from 'react'
import { client } from './client'
import { Courses } from './Courses'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ApolloProvider } from 'react-apollo'

class Graphql extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div className="container">
                    <nav className="navbar navbar-dark bg-primary">
                        <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
                    </nav>
                    <div>
                        <Courses />
                    </div>
                </div>
            </ApolloProvider>
        )
    }
}

export { Graphql }
export default { Graphql }