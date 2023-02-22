import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const url = 'http://52.86.121.123:3000/login';
    const username = document.querySelector('.username-input').value;
    const password = document.querySelector('.password-input').value;

    const data = {
      username: username,
      password: password
    };

    axios.post(url, data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
        <div>
            <h2 className='Login' onClick={()=>{document.querySelector('.login-box').style.transform = 'translateX(-50%)'}}>Login</h2>
        <div className='login-box'>
            <h4 style={{textAlign : 'left', width : '100%'}} onClick={()=>{document.querySelector('.login-box').style.transform = 'translateX(-1000px)'}}>X</h4>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" className="username-input" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" className="password-input" name="password" />

        <button type="submit">Submit</button>
      </form>
      </div>
      </div>
    );
  }
}

export default LoginForm;