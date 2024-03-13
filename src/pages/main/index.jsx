import Navigation from "../../entities/ui/navigation/index"

const Main = () => {
  return (
    <div>
      <p>Профильное задание: Фронтенд-разработчик</p>
      <Navigation path="/task1" title="Часть 1" />
      <Navigation path="/task2" title="Часть 2" />
    </div>
  )
}

export default Main
