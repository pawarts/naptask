import Title from './LoginSignupComponent/ComponentTitle'
import Input from './LoginSignupComponent/Input'
import SubmitButton from './LoginSignupComponent/SubmitButton'
import Footer from './LoginSignupComponent/Footer'

import s from './LoginSignup.module.css'


const Signup = (props) => {
    return (
        <div className={s.wrapper}>
            <form action="" className={s.form_wrapper}>
                <Title title="Create account" subtitle="Please enter your details" />
                <div className='input_wrapper'>
                    <Input input_name="Login" />
                    <Input input_name="Email" />
                    <Input input_name="Password" />
                </div>
                <SubmitButton button_text="Sign Up" />
            </form>
            <Footer text="You have an account? Log In" link="login" />
        </div>
    )
}

export default Signup