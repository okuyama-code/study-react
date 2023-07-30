import Head from 'next/head'
import { Main } from '../components/Main'

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
        <title>index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main page="index" />
    </div>
  )
}
