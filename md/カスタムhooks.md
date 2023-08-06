### まずはカスタムフックを用いて共通化を実現していく
最初のほどのコード
```jsx
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
  const [array, setArray] = useState([]);

  const handleClick = useCallback((e) => {
    if (count < 10 ) {
      setCount(prevCount => prevCount + 1);
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
    setIsShow((prevIsShow) => !prevIsShow)
  }, [])

  const handleAdd = useCallback(() => {
   setArray((prevArray) => {
    if (prevArray.some((item) => item === text)) {
      alert("同じ要素がすでに存在します。");
      return prevArray;
    }

    return [...prevArray, text];
   })
  }, [text]) //[text]がないと関数が再生成されないので
  // 空文字がどんどん追加されてしまうので注意

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
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
      <Main page="index" />
      <Links />
    </div>
  )
}

```

Homeの中から動作に必要なものをグループで切り取って作成したuseCounterの中に配置しました。
```jsx
const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

   // useCallbackにすることで何度も生成されるのを防ぐ
  const handleClick = useCallback((e) => {
    if (count < 10 ) {
      setCount(prevCount => prevCount + 1);
    }
  },[count]);


  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow)
  }, [])

  return { count, isShow, handleClick, handleDisplay };　
  //　使う変数だけをreturnする
}

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();

    //returnでconst { count, isShow, handleClick, handleDisplay } = useCounter();
    // を使っている
  return (
    <div>
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
    </div>
  );
}
```

Homeの中から動作に必要なものをグループで切り取って作成したuseInputArrayの中に配置しました。
```jsx
const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください")
      return;
    }
    setText(e.target.value.trim())
  }, [])

  const handleAdd = useCallback(() => {
   setArray((prevArray) => {
    if (prevArray.some((item) => item === text)) {
      alert("同じ要素がすでに存在します。");
      return prevArray;
    }

    return [...prevArray, text];
   })
  }, [text]) //[text]がないと関数が再生成されないので
  // 空文字がどんどん追加されてしまうので注意

  return { text, array, handleChange, handleAdd };
}

export default function Home() {
  const { text, array, handleChange, handleAdd } = useInputArray();

    //returnでconst { count, isShow, handleClick, handleDisplay } = useCounter();
    // を使っている
  return (
    <div>
      <input type="text" value={text}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return (<li key={item}>{item}</li>)
        })}
      </ul>
    </div>
  );
}
```

