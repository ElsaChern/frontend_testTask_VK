import "./style.css"

const Button = ({ onClick, title, disabled }) => {
  return (
    <button className="Button" onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}

export default Button
