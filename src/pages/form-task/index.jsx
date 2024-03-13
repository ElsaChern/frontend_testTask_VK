import { useEffect, useRef, useState } from "react"
import "./style.css"
import Button from "../../entities/ui/button"
import Navigation from "../../entities/ui/navigation"
import Container from "../../entities/ui/container"
import { fetchAge } from "../../shared/api/fetchAge"

const FormTask = () => {
  const [personName, setPersonName] = useState("")
  const [age, setAge] = useState("")
  const [prevName, setPrevName] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  console.log(loading)
  console.log(age)

  const buttonClickedRef = useRef(false)
  const controllerRef = useRef(new AbortController())

  const getAge = async (name) => {
    controllerRef.current.abort()
    controllerRef.current = new AbortController()
    const { signal } = controllerRef.current

    try {
      if (name === prevName) {
        setMessage("Запрос с таким же именем уже был отправлен")
        return
      }
      const result = await fetchAge(name, { signal })
      setAge(result.age)
      setLoading(false)
      setPrevName(name)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        personName !== prevName &&
        personName !== "" &&
        !buttonClickedRef.current
      ) {
        getAge(personName)
        setLoading(true)
      }
    }, 3000)

    return () => {
      clearTimeout(timer)
      controllerRef.current.abort()
    }
    // eslint-disable-next-line
  }, [personName])

  const handleSubmit = (e) => {
    e.preventDefault()
    buttonClickedRef.current = true
    setLoading(true)
    getAge(personName)
  }

  const handleChange = (e) => {
    const inputValue = e.target.value
    if (/^[a-zA-Z]*$/.test(inputValue)) {
      setPersonName(inputValue)
      setMessage("")
    } else {
      setMessage("Введите латинские буквы")
    }
    buttonClickedRef.current = false
  }

  const setAnswer = () => {
    if (message !== "") {
      return <p style={{ color: "red" }}>{message}</p>
    } else if (loading) {
      return <p>Подождите...</p>
    } else {
      return <p>{age ? `Ваш возраст: ${age}` : ""}</p>
    }
  }

  return (
    <Container>
      <Navigation title="На главную" path="/" />
      <form onSubmit={handleSubmit}>
        <input
          className="Input"
          value={personName}
          onChange={handleChange}
          placeholder="Введите свое имя"
        ></input>
        <Button title="Отправить" disabled={!personName} />
        {setAnswer()}
      </form>
    </Container>
  )
}

export default FormTask
