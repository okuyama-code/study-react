import classes from "./Links.module.css"
// import React, { useCallback, useState } from 'react';

// const ITEMS =[
//     {
//         href: "https://nextjs.org/docs",
//         title: "Document →",
//         description: "Next.js is a framework for building web applications."
//     },
//     {
//         href: "https://nextjs.org/learn",
//         title: "Learn →",
//         description: "To effectively use Next.js, it helps to be familiar with JavaScript, React, and related web development concepts. "
//     },
//     {
//         href: "https://nextjs.org/docs/app/building-your-application/routing",
//         title: "Routing →",
//         description: "The skeleton of every application is routing."
//     },
//     {
//         href: "https://nextjs.org/docs/app/api-reference",
//         title: "API Reference →",
//         description: "The Next.js API reference is divided into the following sections:"
//     },
// ];

export function Links({ items }) {
    // const [items, setItems] = useState(ITEMS);

    // const handleReduce = useCallback(() => {
    //     setItems(prevItems => {
    //         return prevItems.slice(0, prevItems.length - 1);
    // })
    // }, []) // 親であるmain.jsxに移す

  return (
    <div className={classes.grid}>
        {items.map(item => (
            <a key={item.href} href={item.href} className={classes.card} target="_blank" rel="noopener noreferrer">
                <h3 className={classes.title}>{item.title}</h3>
                <p className={classes.description}>{item.description}</p>
            </a>
        ))}
    </div>
  )
}
