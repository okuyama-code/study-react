import styles from "@/components/Headline/Headline.module.css"

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.text}>{props.page} page</h1>

      <p className={styles.discription}>アイテムの数は {props.children} 個です</p>

      <button onClick={props.handleReduce}>減らす</button>

    </div>
  )
}


