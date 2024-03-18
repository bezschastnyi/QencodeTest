import Header from "../../Header/Header";
import EmailInput from "../../components/EmailInput/EmailInput";
import Button from "../../components/Button/Button";
import PasswordInput from "../../components/PasswordInput/PasswordInput";

function ResetPassword () {


    return (
        <>
            <div className="login_container">
                <Header text={"Create new Password?"}/>
                <PasswordInput/>
                <PasswordInput/>
                <Button name={"Reset password"} doing={navigating}/>

            </div>
        </>
    )
}

export default ResetPassword;