import React, {useState} from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import Label from 'reactstrap/lib/Label';

import validator from 'email-validator';
import toastr from 'toastr'
import fire from "../config/fire";

toastr.options = {
    "closeButton": true,
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


function LoginForm(loginProps) {
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
        fire.auth().signInWithEmailAndPassword(email.value, password.value).then((u)=>{

        }).catch((error)=>{
            toastr['error'](error.toString());
        })
    }

    return (
        <Form onSubmit={onSubmit} noValidate>
            <h1>Log in</h1>
            <FormGroup>
                <Col xs={4} sm={4} md={4} lg={4}>
                    <Label style={labelStyle}>Email</Label>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8}>
                    <Input
                        name="email"
                        // placeholder="Email"
                        autoFocus
                        type="email"
                        value={email.value}
                        style={{
                            color: '#333333',
                            backgroundColor: '#E0E0E0',
                            marginBottom:'15px'
                        }}
                        onChange={email.onChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Col xs={4} sm={4} md={4} lg={4}>
                    <Label style={labelStyle}>Password</Label>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8}>
                    <Input
                        name="password"
                        // placeholder="Email"
                        autoFocus
                        type="password"
                        value={password.value}
                        style={{
                            color: '#333333',
                            backgroundColor: '#E0E0E0',
                        }}
                        onChange={password.onChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Button type="submit" className="btn btn-primary w-100 mx-auto mt-2">
                    Log in
                </Button>
            </FormGroup>

        </Form>
    );

}

export default LoginForm;
