/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { source: { ne: null } } }
      ) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            source
            description
            date(formatString: "MMMM DD, YYYY")
            link
          }
          id
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const projects = data.allMarkdownRemark.nodes

  return (
    <div className="projects">
      <h3>My Projects</h3>
      <ol style={{ listStyle: `none` }}>
        {projects.map(project => {
          const title = project.frontmatter.title || project.fields.slug

          return (
            <li key={project.fields.slug}>
              <article
                className="project-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={project.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{project.frontmatter.date}</small>
                </header>
                <section>
                  <strong>
                    Source:{" "}
                    <a href={project.frontmatter.source}>
                      {project.frontmatter.source}
                    </a>
                  </strong>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        project.frontmatter.description || project.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Projects
