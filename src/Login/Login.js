import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import classes from './Login.module.css';

const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState();
    const [passwordType, setPasswordType] = useState("password");
    const passwordTypeToggler = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return
        }
        setPasswordType("password");
    }
    // Log In User
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setUserName(password);
            navigate('/Intro');
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <div className={classes.Body}>
            <div className={classes.MainContainer}>
                <div className={classes.SignInContainer}>
                    <form onSubmit={onSubmitHandler}>
                        <h1>Log in</h1>
                        <input type="email" placeholder="Email" />
                        <input type={passwordType} placeholder="Password" />
                        <div className={classes.showPassword}>
                            <input
                                className={classes.showPasswordCheckbox}
                                type="checkbox"
                                onClick={passwordTypeToggler} />Show Password
                        </div>
                        <button>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;