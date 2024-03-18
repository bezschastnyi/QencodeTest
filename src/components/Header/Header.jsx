
function Header (props) {


    return (
        <div className="header">
            <img className="login_logo" src="/image/logo.svg" alt="logo"/>
            <h2 className="login_form__text">{props.text}</h2>
        </div>
    )
}

export default Header;