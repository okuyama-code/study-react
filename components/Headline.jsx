export function Headline(props) {
  return (
    <>
      <h1>{props.number}</h1>
      <p>{props.children}</p>
    </>
  )
}

