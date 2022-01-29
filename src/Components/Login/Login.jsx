import React, {useState} from 'react'
import {useFormik} from 'formik'
import {Form, Button} from "react-bootstrap"

//react router
import { useNavigate } from 'react-router-dom';

//styled Components
import styled from 'styled-components'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

//BG
import bg from './../Images/BG.png' 
import bgmob from './../Images/BGmobile.png'
import bgwide from './../Images/BGwide.png'

const Login = (props) => {

    const navigate = useNavigate();

    const [logged, setLogged] = useState(false)

    const admin = {
        adEmail: 'challenge@alchemy.org',
        admPassword: 'react',
    }

    const validate = (values) =>{ //Función para mostrar los errores presentes en el formulario
        const errors = {}
        if(!values.email){
            errors.email = 'Required'
        }
        if(!values.password){
            errors.password = 'Required'
        } else if (values.password.length < 5){
            errors.password = 'Must be 5 character or more'
        } 
        return errors;
    }

    const formik = useFormik({ 
        initialValues:{
            email:'',
            password: ''
        },
        validate, 
        onSubmit: values => {
          validateUser()
        }
    })

    function validateUser(values) {
        if (formik.values.email === admin.adEmail && formik.values.password === admin.admPassword){
            setLogged(true);
            localStorage.setItem('token', JSON.stringify(admin))
            setTimeout(() => {
                navigate('/Home');
            }, 3000);
        } else {
            window.location.href = "http://challenge-react.alkemy.org/";
            console.log('error')
        }
    }
    

    return(
        <LoginStyle>

            <Title>Welcome to <em>HotelFood</em></Title>
            <SubTitle>The site where you can schedule your menues in about minutes!</SubTitle>

            <LoginForm className="Login">

                <FormStyle onSubmit={formik.handleSubmit}>

                    <FormGroup className="mb-3" controlId="formBasicEmail">
                        <FormLabel>Email address</FormLabel>
                        <FormControl type="email" placeholder="Enter email" name="email" 
                         onChange={formik.handleChange} value = {formik.values.email} onBlur = {formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? <div >{formik.errors.email}</div> : null}
                    </FormGroup>

                    <FormGroup className="mb-3" controlId="formBasicPassword">
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" placeholder="Password" name ="password" 
                        onChange={formik.handleChange} value = {formik.values.password} onBlur = {formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                    </FormGroup>

                    <ButtonStyle className="button" variant="primary" type="submit" >
                        Login
                    </ButtonStyle>

                    {logged ? 
                        <div>
                            <b>Logged! <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#00ff00"/></b> 
                        </div>
                        : null}
                        
                </FormStyle>
            </LoginForm>
        </LoginStyle>
    );
}

export default Login

const LoginStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(${bg});
    flex-direction: column;
    
    animation: fadeIn 1s;
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (max-width: 360px) {
        background-image: url(${bgmob});
    }

    @media (min-width: 1920px) {
        background-image: url(${bgwide});
    }
`
const Title = styled.h1`
    font-size: 3rem;
    color: #fff;
    text-align: center;
    
    animation: slideIn 1.5s;
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-100%);
        }
        to {
            opacity: 1;
            transform: translateY(0%);
        }
    }
`
const SubTitle = styled.h3`
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    margin: 0;
    margin-bottom: 1rem;

    animation: slideIn 1.5s;
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-100%);
        }
        to {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    @media (max-width: 360px) {
        width: 90vw;
    }
`
const LoginForm = styled.div`
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-bottom: 200px;

    animation: fadein 2.5s;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (max-width: 360px) {
        width: 250px;
    }
`
const FormStyle = styled(Form)`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
`
const FormGroup = styled(Form.Group)`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;  
`
const FormLabel = styled(Form.Label)`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin: 0;
`
const FormControl = styled(Form.Control)`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`
const ButtonStyle = styled(Button)`
    font-size: 1rem;
    width: 100px;
    height: 30px;
    border-radius: 15px;
    background-color: #aa0f0f;
    color: #fff;
    border: 3px solid #aa0f0f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`