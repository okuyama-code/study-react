import Head from 'next/head'
import { Main } from '../components/Main'
import { Header } from '@/components/Header'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
        <title>index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Main page="about" />
    </div>
  )
}
