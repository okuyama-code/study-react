import Link from 'next/link'
import React from 'react'
import classes from "./Header.module.css"

export function Header() {
  return (
    <header className={classes.header}>
        <Link href="/" className={classes.anchor}>
            Index
        </Link>
        <Link href="/about" className={classes.anchor}>
            about
        </Link>
    </header>
  )
}
