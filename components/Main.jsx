import React from 'react'
import { Headline } from './Headline'
import styles from "../styles/Home.module.css"

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page} >
      {props.page} page!!!
      </Headline>
    </main>
  )
}
