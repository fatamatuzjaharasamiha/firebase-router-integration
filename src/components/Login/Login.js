import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle}=useFirebase();
    return (
        <div>
            <h3>Please log in</h3>
            <button onClick={signInWithGoogle}>Google Sign in</button>
            <br />
            <form action="">
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;