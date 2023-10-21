
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './login.css'
import DefaultLayout from '../layout'
import { useState } from 'react'

export default function Register() {
    const [formData,setFormData]=useState({
        email:'',
        password:''
    });
    const [formSuccess,setFormSuccess]=useState(false);
    const validateEmail =(email)=>{
        const regix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regix.test(email);
    }
    const validatePassword=(password)=>{
        if(password.length<6) return false;
        else return true;
    }
    const submitForm=(e)=>{
        e.preventDefault();
        const isValidemail=validateEmail(formData.email);
        const isValidpassword=validatePassword(formData.password);

        setFormSuccess(isValidemail && isValidpassword);
        if(isValidemail&&isValidpassword){
            localStorage.setItem('user',JSON.stringify(formData))
            window.location='./login';
        }else{
            console.error("Email hoặc password ko hợp lệ!!")
            alert("Email hoặc password ko hợp lệ!!");
        }
    }
    return (
        <DefaultLayout>
            <Form className='form' onSubmit={(e) => submitForm(e)} >
                <h1>Register
                  <a href="./" style={{float:'right'}}><i>X</i></a>
                </h1>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Your Name' type="text"  />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='name@mail.com' type="email" onChange={(e)=>{
                        setFormData({
                            ...formData,
                            email: e.target.value
                        });
                    }} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" onChange={(e)=>
                    {
                        setFormData({
                            ...formData,
                            password: e.target.value
                        })
                    }}  />
                </Form.Field>
                <Form.Field>
                    <label>Re-Password</label>
                    <input type='password' />
                </Form.Field>
                <Button type='submit' color='blue' >Register</Button>
                
            </Form>
        </DefaultLayout>
    )
}