import { Route, Routes } from "react-router-dom"
import "./styles/App.css"
import Main from "../pages/main"
import ButtonBlock from "../pages/button-block"
import FormTask from "../pages/form-task"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="task1" element={<ButtonBlock />} />
          <Route path="task2" element={<FormTask />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
