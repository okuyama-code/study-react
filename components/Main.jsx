import React from 'react'
import { Container } from './Container'

export function Main(props) {
  return (
    <>
        <Container
          page={props.page} >
            index page!!!/{props.page}
        </Container>
    </>
  )
}
