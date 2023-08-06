import styles from "@/components/Headline/Headline.module.css"

export function Headline(props) {
  return (
    <>
      <h1 className={styles.text}>{props.page}</h1>
    </>
  )
}


