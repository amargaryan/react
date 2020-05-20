import React, {useState} from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import Label from 'reactstrap/lib/Label';

import validator from 'email-validator';
import toastr from 'toastr'
import fire from "../config/fire";

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

export const labelStyle = {
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: '#BDBDBD',
};


function useFormField(initialValue) {
    const [value, setValue] = useState(initialValue);

    function onChange(event) {
        setValue(event.target.value);
    }

    return {
        value,
        onChange,
    };
}


function Signup(loginProps) {
    const email = useFormField('');
    const password = useFormField('');

    function validateForm() {
        let isFormValid = true;
        if (!validator.validate(email.value)) {
            toastr['error']('Your email is not valid')
            isFormValid = false;
        }
        return isFormValid;
    }

    async function onSubmit(event) {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        fire.auth().createUserWithEmailAndPassword(email.value,password.value).then((u)=>{
        }).then((u)=>{console.log(u)})
            .catch((error) =>{
                toastr['error']('Something went wrong')
            })
    }

    return (
        <Form onSubmit={onSubmit} noValidate>
            <h1>Sign Up</h1>
            <FormGroup row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Label style={labelStyle}>Email</Label>
                    <Input
                        name="email"
                        // placeholder="Email"
                        autoFocus
                        type="email"
                        value={email.value}
                        style={{
                            color: '#333333',
                            backgroundColor: '#E0E0E0',
                        }}
                        onChange={email.onChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Label style={labelStyle}>Password</Label>
                    <Input
                        name="password"
                        // placeholder="Email"
                        autoFocus
                        type="password"
                        value={password.value}
                        style={{
                            color: '#333333',
                            backgroundColor: '#E0E0E0',
                            marginTop:'15px'
                        }}
                        onChange={password.onChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Button type="submit" className="btn btn-primary w-100 mx-auto">
                    Sign up
                </Button>
            </FormGroup>

        </Form>
    );

}

export default Signup;
