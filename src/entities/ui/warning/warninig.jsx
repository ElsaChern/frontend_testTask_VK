import "./style.css"

const Warning = ({ text, children }) => {
  if (text) {
    return <p className="Warning">{text}</p>
  } else {
    return children
  }
}

export default Warning
