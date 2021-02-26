import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'

function Signup() {
    return (
      <div>
        <Header />
        <Form
          title="REGISTER"
          topBtn="CREATE ACCOUNT"
          downBtn="REGISTER WITH FACEBOOK"
        />
      </div>
    );
}

export default Signup
