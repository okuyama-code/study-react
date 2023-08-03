## useEffect, useCallbackの第二引数の[]について
useEffectの第二引数の[]に変数を入れると、変数の値が変更されたタイミングで改めてuseEffectの部分の処理が走る。

```
import Head from 'next/head'
import { Main } from '../components/Main/Main'

import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header/Header'
import { Links } from '@/components/links/Links'
import { useEffect, useState } from 'react'


export default function Home() {
  const [count, setCount] = useState(1)

  const handleClick = (e) => {
    setCount(count => count + 1);
    setCount(count => count + 1);

  }

  useEffect(() => {
    console.log(`マウント時: ${count}`); //マウント時に表示される
    document.body.style.backgroundColor = "lightblue"
    return () => {
      document.body.style.backgroundColor = ""
      console.log(`アンマウント時: ${count}`);
    }
  }, [count])
  // アンマウント時のほうが先に呼ばれる

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
```
