import Head from 'next/head'
import { Main } from '../components/Main/Main'

import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header/Header'
import { Links } from '@/components/links/Links'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Main page="index" />
      <Links />
    </div>
  )
}
