import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Sidebar from '../components/Sidebar'
import Tocbot from '../components/Tocbot'
import PrevNext from '../components/PrevNext'
import Wave from '../img/wave.png'

export const AnnalsPageTemplate = ({ title, content, contentComponent, nodes, location }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className="">
        <div className="">
          <div className="">
            <Sidebar nodes={nodes} location={location} />
          </div>
          <div className="">
            <div>
              <div className="annals-body">
                <h2
                  className="font-kxzd"
                  style={{ backgroundSize: '32px', backgroundImage: `url(${Wave})` }}
                >
                  {title}
                </h2>
                <PageContent className="" content={content} />
              </div>
              <PrevNext nodes={nodes} location={location} />
            </div>
          </div>
          <div className="">
            <div className="fixed">
              <Tocbot title={title} className="annals-tocbot" />
              <span
                className="back-to-top"
                onClick={()=> {
                  document.documentElement.scrollTop = 0
                }}
              >
                回到顶部
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AnnalsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const AnnalsPage = ({ data, location }) => {
  // console.log(data)
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AnnalsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        nodes={data.allMarkdownRemark.edges}
        location={location}
      />
    </Layout>
  )
}

export default AnnalsPage

export const AnnalsPageQuery = graphql`
  query AnnalsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000,
      sort: {order: ASC, fields: frontmatter___order},
      filter: {frontmatter: {templateKey: {eq: "annals-page"}}},
    ) {
      edges {
          node {
              fields {
                  slug
              }
              frontmatter {
                  title
                  vol
                  order
              }
          }
      }
    }
  }
`
