import Head from 'next/head'
import { Main } from '../components/Main/Main'
import { Header } from '@/components/header/Header'
import styles from '@/styles/Home.module.css'
import { Links } from '@/components/links/Links'




export default function About({ count, isShow, handleClick, handleDisplay,
  text, array, handleChange, handleAdd, }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>about</title>
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

      <Main page="About Page" />
     
    </div>
  )
}
