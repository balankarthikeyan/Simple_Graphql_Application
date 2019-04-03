import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Course = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{props.course.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">by {props.course.author}</h6>
            <p className="card-text">{props.course.description}</p>
            <a href={props.course.url} className="card-link">Go to course ...</a>
        </div>
    </div>
)

const COURSE = gql`
  query AllCourses {
    allCourses {
        id
        userId
        title
        completed
    }
  }
`

const Courses = () => (
  <Query 
    query={COURSE}
  >
    {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>
        console.log('****graphqldata', data)
        return data.allCourses.map((currentCourse) => (
            <Course course={currentCourse} />
        ));
    }}
  </Query>
)

export { Courses }
export default Courses