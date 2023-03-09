const Button = ({ type, value, onclick}) => {

    return(
        <button onClick={() => onclick()} className="header__button" type={type}>{value}</button>
    )

}

export default Button;