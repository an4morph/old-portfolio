import React from "react"
import { graphql } from "gatsby"
import Swiper from 'react-id-swiper'
import Layout from '../components/Layout'

export default function Template({
  data,
}) {
  console.log('ss', data)
  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }

  return (
    <Layout>
      <div className="page">
        <h1>{frontmatter.title}</h1>
        <div className="portfolio-swiper">
          <Swiper {...params}>
            {
              frontmatter.slides.map((img, index) => (
              <img key={index} className="portfolio-slide" alt="screenshot" src={img.publicURL} />
              ))
            }
          </Swiper>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          className="portfolio-link"
          href={frontmatter.link}>
          {frontmatter.link}
        </a>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query MyQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        link
        slides {
          publicURL
        }
      }
    }
  }
`