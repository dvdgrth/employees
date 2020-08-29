import React, { useState } from 'react'
import './LoginLogout.css'

function LoginLogout() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function onLoginClicked(event: React.MouseEvent) {
        setIsAuthenticated(true);
    };
    function onLogOutClicked(event: React.MouseEvent) {
        setIsAuthenticated(false);
    };

    const onClickFunction = isAuthenticated ? onLogOutClicked: onLoginClicked;

    return (
        <div>
            <div onClick={onClickFunction} className="login-logout-button">{isAuthenticated ? "Logout" : "Login" }</div>         
        </div>
    )
}

export default LoginLogout
