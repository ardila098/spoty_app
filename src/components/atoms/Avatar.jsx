const Avatar = ({ avatar, name, nameUser }) => {
    return(
        <>
            <section className="header__section">
                <p className="header__name">{nameUser}</p>
                <figure className="header__container">
                    <img className="header__img" src={avatar} alt={name} />
                </figure>
            </section>
        </>
    )
}

export default Avatar;