import "./style.css"

const Loader = ({ isLoading, children }) => {
  if (isLoading) {
    return <p className="Loader">Подождите...</p>
  } else {
    return children
  }
}

export default Loader
