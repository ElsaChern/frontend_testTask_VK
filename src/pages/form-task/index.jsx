import { useEffect, useRef, useState } from "react"
import "./style.css"
import Button from "../../entities/ui/button"
import Navigation from "../../entities/ui/navigation"
import Container from "../../entities/ui/container"
import { fetchAge } from "../../shared/api/fetchAge"
import Loader from "../../entities/ui/loader"
import Warning from "../../entities/ui/warning/warninig"

const FormTask = () => {
  const [personName, setPersonName] = useState("")
  const [age, setAge] = useState("")
  const [prevName, setPrevName] = useState({})
  const [warning, setWarning] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const clickedButton = useRef(false)
  const controllerRef = useRef(new AbortController())

  const getAge = async (name) => {
    setIsLoading(true)
    controllerRef.current.abort()

    const signal = controllerRef.current

    if (prevName[name]) {
      if (prevName[name] === -1) {
        setWarning("Ваше имя не найдено")
      } else {
        setAge(prevName[name])
      }
    } else {
      try {
        const result = await fetchAge(name, { signal })
        let resultAge

        if (result.age === null) {
          resultAge = -1
          setWarning("Ваше имя не найдено")
        } else {
          resultAge = result.age
          setAge(result.age)
        }

        setPrevName((prev) => ({
          ...prev,
          [name]: resultAge,
        }))
      } catch (error) {
        setWarning(error.message)
      }
    }
    setIsLoading(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        !prevName[personName] &&
        personName !== "" &&
        !clickedButton.current
      ) {
        getAge(personName)
      }
    }, 3000)

    return () => {
      clearTimeout(timer)
      controllerRef.current.abort()
    }
  }, [personName])

  const handleSubmit = (e) => {
    e.preventDefault()
    clickedButton.current = true
    getAge(personName)
  }

  const handleChange = (e) => {
    const inputValue = e.target.value
    if (/^[a-zA-Z]*$/.test(inputValue)) {
      setPersonName(inputValue)
      setWarning("")
    } else {
      setWarning("Введите только латинские буквы")
    }
    clickedButton.current = false
  }

  return (
    <Container>
      <Navigation title="На главную" path="/" />
      <form className="Form" onSubmit={handleSubmit}>
        <input
          className="Input"
          value={personName}
          onChange={handleChange}
          placeholder="Введите свое имя"
        ></input>
        <Button title="Отправить" disabled={!personName} />
        <Loader isLoading={isLoading}>
          <Warning text={warning}>
            <p>{age ? `Ваш возраст: ${age}` : ""}</p>
          </Warning>
        </Loader>
      </form>
    </Container>
  )
}

export default FormTask
