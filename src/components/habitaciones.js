import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "./layout"
import { css } from "@emotion/react"

export const query = graphql`
  query($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        id
        slug
        contenido
        imagen {
          gatsbyImageData
        }
      }
    }
  }
`

const HabitacionTemplate = ({
  data: {
    allDatoCmsHabitacion: { nodes },
  },
}) => {
  const { titulo, contenido, imagen } = nodes[0]
  return (
    <Layout>
      <main
        css={css`
          margin: 0 auto;
          max-width: 1200px;
          width: 95%;
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin-top: 4rem;
          `}
        >
          {titulo}
        </h1>
        <p
          css={css`
            text-align: justify;
          `}
        >
          {contenido}
        </p>
        <GatsbyImage image={imagen.gatsbyImageData} alt="inicio" />
      </main>
    </Layout>
  )
}

export default HabitacionTemplate
