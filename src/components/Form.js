import React from 'react'
import "./Form.css"
import {Link} from "react-router-dom"
import VisibilityIcon from '@material-ui/icons/Visibility';
import FacebookIcon from "@material-ui/icons/Facebook"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Form({title, topBtn, downBtn}) {
    return (
        <div>
        <form className="form"> 
            <h2 className="form__header">{title}</h2>
     <input className="form__email" type="email" placeholder="Email Address"/>
     <div className="password__div">
     <input className="form__password" type="password" placeholder="Password"/>
<VisibilityIcon className="form__eye"/>
     </div>



        <div className="form__help">
            <div>
    <label htmlFor="remember">
         <input type="checkbox"/> Remember me
     </label>
     </div>

     <p className="forgotP"> Forgot Password?</p>
        </div>
        <button className="form__button login">
            <ExitToAppIcon className="form__icon"/>
            {topBtn}</button>
        <button  className="form__button">
            <FacebookIcon className="form__icon"/>
            {downBtn}</button>
        </form>
        </div>
    )
}

export default Form
