import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Navegacion from "./nav"

const EnlaceHome = styled(Link)`
  color: #ffffff;
  text-align: center;
  text-decoration: none;
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer
        css={css`
          background-color: rgb(44, 62, 80);
          margin-top: 5rem;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Navegacion />

          <EnlaceHome to="/">
            <h1>Hotel Gatsby</h1>
          </EnlaceHome>
        </div>
      </footer>
      <p
        css={css`
          text-align: center;
          color: #ffffff;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >
        Hotel Gatsby, Todos los Derechos Reservados &copy; {year}
      </p>
    </>
  )
}

export default Footer
