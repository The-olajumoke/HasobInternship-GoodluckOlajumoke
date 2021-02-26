import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
function Login() {
    return (
      <div>
        <Header />
        <Form title="LOGIN" topBtn="LOGIN" downBtn="LOGIN WITH FACEBOOK" />
      </div>
    );
}

export default Login
