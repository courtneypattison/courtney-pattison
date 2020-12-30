import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  align-items: center;
  background-color: #ffe082;
  display: flex;
  flex-direction: column;
  padding: 1em;
`
export default function Layout({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}