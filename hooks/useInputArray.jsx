import { useCallback, useState } from 'react'

export const useInputArray = () => {
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
