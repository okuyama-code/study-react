import React from 'react'
import { Headline } from './Headline'

export function Main(props) {
  return (
    <>
        <Headline page={props.page} >
            index page!!!/{props.page}
        </Headline>
    </>
  )
}
