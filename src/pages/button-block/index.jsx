import { useEffect, useRef, useState } from "react"
import Button from "../../entities/ui/button"
import Navigation from "../../entities/ui/navigation"
import Container from "../../entities/ui/container"
import { fetchFact } from "../../shared/api/fetchFact"

const ButtonBlock = () => {
  const [text, setText] = useState("")

  const textArea = useRef(null)

  const addText = async () => {
    try {
      const result = await fetchFact()
      setText(result.fact)
      focus()
    } catch (error) {
      alert(error.message)
    }
  }

  const focus = () => {
    textArea.current.focus()
  }

  useEffect(() => {
    if (text) {
      const firstIndex = text.indexOf(" ")
      let cursorPosition = 0
      if (firstIndex !== -1) {
        cursorPosition = firstIndex
      } else {
        cursorPosition = text.length
      }
      textArea.current.setSelectionRange(cursorPosition, cursorPosition)
    }
  }, [text])

  // Заглушка во избежании ошибки о том, что поле формы существует без обработчика onChange.
  const onChangeHandler = () => {}

  return (
    <Container>
      <Navigation title="На главную" path="/" />
      <Button title="Отобразить текст" onClick={addText} />
      <textarea
        className="Textarea"
        ref={textArea}
        onChange={onChangeHandler}
        rows={5}
        value={text}
      ></textarea>
    </Container>
  )
}

export default ButtonBlock
