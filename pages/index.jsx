import Head from 'next/head'
import { Main } from '../components/Main/Main'

import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header/Header'
import { Links } from '@/components/links/Links'
import { useEffect, useState } from 'react'


export default function Home() {
  const [count, setCount] = useState(1)

  const handleClick = (e) => {
    // setcount(count + 1); 正しくない書き方
    setCount(count => count + 1);
    setCount(count => count + 1);
    // 正しい書き方 ()の中は関数　引数のcountは前回の状態を反映せせることができる

  }

  //Homeコンポーネントがマウント(DOMになる瞬間)(JSXがレンダリングされる瞬間)されるときに背景がlightblueになる処理が走る
  useEffect(() => {
    // console.log("マウント時")
    document.body.style.backgroundColor = "lightblue"
    // ここから上がマウント時の処理
    // ここから下のreturnからがアンマウント時の処理
    return () => {
      // console.log("アンマウント時")
      // aboutページに行くときにindexページのHomeコンポーネントが消えることになるので背景色が青から元に戻る
      document.body.style.backgroundColor = ""

    }
  }, [])// [](空配列)に何かしらの変数を入れることによって初志をもう一度実行させることができる

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
