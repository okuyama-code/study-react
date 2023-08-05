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
onChangeというのはinputに何かしらのテキストを打った時にテキストが変更されるが、その時のイベントを取得することができる。


### const [isShow, setIsShow] = useState(true);
{count}をisShowの値に応じて消したり出したりしてみる。その時に使うものとして三項演算子というのがある。Reactでよく使われる構文なのでしっかり覚える。
```
  // trueなら?のあとが実行される
 {true ? <h1>{count}</h1> : null}
 // <h1>{count}</h1>が実行されcount状態変数の値が表示される
 // falseなら : のあとが実行される
 {false ? <h1>{count}</h1> : null}
 // nullが実行され何も表示されない
```
Reactにおいてnullを返すことによって何も表示させないということが可能になる。
------------------------------
Reactではこのようにif文を使うことができないため三項演算子が使われる。ReactというよりはどっちかというとJSXの記法による制限です。
```

    <div className={styles.container}>
      <Head>
        <title>index</title>
      </Head>
      <Header />
      {true ? <h1>{count}</h1> : null}
      // {if () {}} このように書くことはできない
      <button onClick={handleClick}>ボタン</button>
      <input
        type="text"
        value={text}
        onChange={handleChange}
      />
      <Main page="index" />
      <Links />
    </div>
```

trueの部分をisShowに変えて実践例を書く
```
{true ? <h1>{count}</h1> : null}
           ↓
{isShow ? <h1>{count}</h1> : null}
```
ボタンを押したらisShowのboolが入れ替わるようにする
```
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
      alert("5文字いないにしてください")
      return;
    }
    setText(e.target.value.trim())
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
      <button onClick={() => {
        setIsShow((isShow) => {
          if (isShow === true) {
            return false;
          } else {
            return true;
          }
        })
      }}>{isShow ? "非表示" : "表示"}</button>

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

```
