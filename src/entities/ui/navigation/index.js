import { Link } from "react-router-dom"
import "./style.css"

function Navigation({ title, path }) {
  return (
    <Link className="Nav" to={path}>
      {title}
    </Link>
  )
}

export default Navigation
