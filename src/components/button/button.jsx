import style from "../button/button.module.css"

const Button = ({links, ...props}) => {
  return (
    <div className={style.Button}>
        <a href={links} className={style.buttonA} {...props}></a>
    </div>
  )
}

export default Button;