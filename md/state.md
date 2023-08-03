# state 状態
Reactのコンポーネントは、状態が変化しないとコンポーネントが再レンダリングされないようになっている。<br>
ReactではuseStateを使ってstateの管理を行う。その状態が変化することでコンポーネントを再レンダリングできる。<br>
あとは親がレンダリングされたタイミングで子コンポーネントが受け取っているpropsの値が変わると再レンダリングされる

```
import Head from 'next/head'
import { Main } from '../components/Main/Main'

import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header/Header'
import { Links } from '@/components/links/Links'
import { useEffect, useState } from 'react'


export default function Home() {
  const [foo, setFoo] = useState(1)
  // let foo = 1;

  const handleClick = (e) => {
     // setFoo(foo + 1); 正しくない書き方　2つに増やしても前回の状態を反映させない
    setFoo(foo => foo + 1); // 正しい書き方 ()の中は関数　引数のfooは前回の状態を受け取って反映せせることができる
    // setFoo(foo => foo + 1);　の省略しない書き方
    <!-- setFoo(function(foo) {
        return foo +1;
    }) -->

    <!-- カウントが２ずつ上がらない
    setFoo(foo + 1);
    setFoo(foo + 1); -->

    <!-- カウントが2ずつ上がる
     setFoo(foo => foo + 1);
     setFoo(foo => foo + 1); -->

    // foo = foo +1
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
  console.log(foo)
  return (
    <div className={styles.container}>
      <Head>
        <title>index</title>
      </Head>
      <Header />
      <h1>{foo}</h1>
      <button onClick={handleClick}>ボタン</button>

      <Main page="index" />
      <Links />
    </div>
  )
}

```
