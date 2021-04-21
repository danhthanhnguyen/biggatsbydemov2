import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardItem from "../components/CardItem";
import { makeStyles, Box, Typography, Container } from "@material-ui/core";

const BlogIndex = ({ data, location }) => {
  const classes = useStyles();
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Container className={classes.content}>
        <Box className={classes.root}>
          <Typography variant="h4">Tin mới nhất</Typography>
          <Box className={classes.boxRoot}>
            {posts.map(post => (
              <CardItem key={post.fields.slug} href={post.fields.slug} img="https://soict.hust.edu.vn/content/uploads/soict2019.jpg" title={post.frontmatter.title || post.fields.slug} date={post.frontmatter.date} description={post.frontmatter.description || post.excerpt}/>
            ))}
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default BlogIndex

const useStyles = makeStyles(() => ({
  root: {
    "&>*:first-child": {
      textAlign: "center"
    }
  },
  boxRoot: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: "auto auto auto",
    justifyContent: "space-around",
    "&>*": {
      padding: "24px 16px",
      width: "411px"
    }
  },
  content: {
    padding: "20px 0px"
  }
}));

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
