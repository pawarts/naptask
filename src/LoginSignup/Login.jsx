import Title from './LoginSignupComponent/ComponentTitle'
import Input from './LoginSignupComponent/Input'
import SubmitButton from './LoginSignupComponent/SubmitButton'
import Footer from './LoginSignupComponent/Footer'

import s from './LoginSignup.module.css'


const Login = (props) => {
    return (
        <div className={s.wrapper}>
            <form action="" className={s.form_wrapper}>
                <Title title="Welcome back!" subtitle="Please enter your details" />
                <div className='input_wrapper'>
                    <Input input_name="Login" />
                    <Input input_name="Password" />
                </div>
                <SubmitButton button_text="Log In" />
            </form>
            <Footer text="Don’t have an account? Sign up" link="signup" />
        </div>
    )
}

export default Login