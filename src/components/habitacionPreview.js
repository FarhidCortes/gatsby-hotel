import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`

const HabitacionPreview = ({ habitacion }) => {
  const { contenido, imagen, titulo, slug } = habitacion
  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <GatsbyImage image={imagen.gatsbyImageData} alt="inicio" />
      <div
        css={css`
          padding: 2rem;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
            text-align: center;
          `}
        >
          {titulo}
        </h3>
        <p
          css={css`
            text-align: justify;
          `}
        >
          {contenido}
        </p>
        <Boton to={slug}>Ver Habitacion</Boton>
      </div>
    </div>
  )
}

export default HabitacionPreview
