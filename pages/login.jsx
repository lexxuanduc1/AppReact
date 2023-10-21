import { Button, Checkbox, Form } from 'semantic-ui-react'
import './login.css'
import DefaultLayout from '../layout'
import { useState } from 'react'

export default function Login() {
    const [type, setType] = useState('password');
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const validateEmail = (email) => {
      const regix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regix.test(email);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const isValid = validateEmail(email);
      setIsValidEmail(isValid);
      if (isValid) {
        localStorage.setItem('login', true);
        window.location='./';
      } else {
        console.error("Email ko hợp lệ");
      }
    };
    return (
        <DefaultLayout>
            <Form className='form' onSubmit={handleSubmit}>
                <h1>Sign In
                  <a href="./" style={{float:'right'}}><i>X</i></a>
                </h1>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='name@mail.com' type="email" value={email} onChange={handleEmailChange} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type={type} onChange={(e) => setFormData({
                        ...formData,
                        password: e.target.value
                    })} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Show password' onClick={() => {
                        type === 'password' ? setType('text') : setType('password')
                    }} />
                </Form.Field>
                <Button type='submit' color='blue' >Login</Button>
                {/*onClick={(e)=>{
                  e.preventDefault();
                  localStorage.setItem('login', true);
                  window.location='./'
                }}*/}
                <Form.Field >
                <a  style={{marginRight:"10px"}} href="./register">Create Account</a>
                <a href="">Forgot Password</a>
                </Form.Field>
            </Form>
        </DefaultLayout>
    )
}