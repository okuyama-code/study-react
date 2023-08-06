import { useCallback, useState } from 'react'


export const useCounter = () => {
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
  }
