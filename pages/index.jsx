import Head from 'next/head'
import { Main } from '../components/Main'

import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header'
import { Links } from '@/components/Links'


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
