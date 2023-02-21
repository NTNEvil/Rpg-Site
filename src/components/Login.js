import React from "react";

function Login() {
    function apeel() {
        document.querySelector('.login-box').style.transform = 'translate(-50%, -55%)'
    }
    function desapear() {
        document.querySelector('.login-box').style.transform = 'translate(-1000px)'
    }
    return (<div>

        <h2 className='Login' onClick={apeel}>Log In</h2>
        <div class="login-box">
            <div className="fechar" onClick={desapear}>X</div>
            <p>Login</p>
            <form>
                <div class="user-box">
                    <input required="" name="" type="text" autocomplete="off"/>
                    <label>Usuario</label>
                </div>
                <div class="user-box">
                    <input required="" name="" type="password" autocomplete="off"/>
                    <label>Senha</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Entrar
                </a>
            </form>
        </div>
    </div>);
}

export default Login;