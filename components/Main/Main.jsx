import React from 'react'
import styles from "./Main.module.css"
import { Headline } from '@/components/Headline/Headline'
export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page} >
      {props.page} page!!!
      </Headline>
    </main>
  )
}
