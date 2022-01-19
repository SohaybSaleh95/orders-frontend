import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';
import './../config'

export default function Login() {

    const [form, setForm] = useState(
        {
            phone: '',
            password: '',
        }
    );

    const InfoChange = (e) => {
        let { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }


    const login = () => {
        if (form.phone == '' || form.password == '') {
            alert('يجب ملئ كافة الحقول')
            return;
        }

        axios.post(global.config.server + `/auth/login`, form).then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            if (res.data.user.type === 'Admin') {
                window.location = '/Admin'
            } else if (res.data.user.type === 'Transport') {
                window.location = '/Transport/providing-service'
            } else {
                window.location = '/Customer/service-request'
            }
        }).catch(error => {
            alert(error.response.data.errorMessage)
        });
    }


    return (
        <div className="login-body">
            <div className="card login-panel p-fluid">
                <div className="login-panel-content">
                    <div className="p-grid">
                        <div className="p-col-12 p-sm-6 p-md-6 logo-container p-text-right">
                            <span className="guest-sign-in p-text-right">
                                أهلا وسهلا بك في موقع <b>عالطريق</b>
                                <br />
                                الرجاء تسجيل الدخول
                            </span>
                        </div>
                        <div className="p-col-12 username-container">
                            <label className='p-text-right'>رقم الهاتف</label>
                            <div className="login-input">
                                <InputText id="phone" name='phone' type="text"
                                    value={form.phone} onChange={InfoChange} />
                            </div>
                        </div>
                        <div className="p-col-12 password-container">
                            <label className='p-text-right'>كلمة السر</label>
                            <div className="login-input">
                                <InputText type="password" id="password" name="password"
                                    value={form.password} onChange={InfoChange} />
                            </div>
                        </div>

                        <div className="p-col-12 p-sm-12 p-md-12 forgetpassword-container">
                            <a href="/register" className="forget-password">ليس لديك حساب؟</a>
                        </div>

                        <div className="p-col-12 p-sm-6 p-md-6" onClick={login}>
                            <Button label="تسجيل الدخول" icon="pi pi-check" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}