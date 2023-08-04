import Head from 'next/head'
import { Main } from '../components/Main/Main'

import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header/Header'
import { Links } from '@/components/links/Links'
import { useCallback, useEffect, useState } from 'react'


export default function Home() {
  const [count, setCount] = useState(1)

  const handleClick = useCallback((e) => {
    if (count < 10 ) {
      setCount(count => count + 1);
    }
  },[count]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue"
    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [count])

  return (
    <div className={styles.container}>
      <Head>
        <title>index</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>

      <Main page="index" />
      <Links />
    </div>
  )
}
