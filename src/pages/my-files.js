import React from 'react';
import { graphql } from 'gatsby'

export default ({ data }) => {
    console.log(data)
    return(
        <div>
            <ul>
                <li><a href={ data }>Data</a></li>
            </ul>
        </div>
    )
}

export const query = graphql`
    query {
        allFile {
            edges {
              node {
                relativePath
                prettySize
                extension
                birthTime
              }
            }
          }
    }
`
