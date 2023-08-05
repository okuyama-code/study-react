import Head from 'next/head'
import { Main } from '../components/Main/Main'

import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header/Header'
import { Links } from '@/components/links/Links'
import { useCallback, useEffect, useState } from 'react'


export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback((e) => {
    if (count < 10 ) {
      setCount(count => count + 1);
    }
  },[count]);



  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください")
      return;
    }
    setText(e.target.value.trim())
  }, [])

  // useCallbackにすることで何度も生成されるのを防ぐ
  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow)
  }, [])

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
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <input
        type="text"
        value={text}
        onChange={handleChange}
      />
      <Main page="index" />
      <Links />
    </div>
  )
}
