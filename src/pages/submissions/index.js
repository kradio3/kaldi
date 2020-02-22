import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

//https://css-tricks.com/forms-auth-and-serverless-functions-on-gatsby-and-netlify/

const SubmissionsPage = ({
  data: {
    allContacts:{edges},
    site: {
      siteMetadata: { title },
    },
  },
}) => {

  console.log('Contacts', edges);

  return(
    <Layout>
      <section className="section">
        <Helmet title={`Tags | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h1 className="title is-size-2 is-bold-light">Submissions</h1>
            <ul>
              {edges.map(edge => (
                <li key={edge.node.data.email}>
                    {edge.node.data.email}: ({edge.node.data.name}) {edge.node.data.message}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
  )}

export default SubmissionsPage

export const tagPageQuery = graphql`
  query SubmissionsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContacts {
      edges {
        node {
          data {
            id
            message
            name
            email
          }
        }
      }
    }
  }
`
