import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';
import './../config'
import { Dropdown } from 'primereact/dropdown';

export default function Register() {
    const genders = [
        {
            label: 'ذكر',
            value: 'male'
        },
        {
            label: 'أنثى',
            value: 'female'
        }
    ]

    const [form, setForm] = useState(
        {
            name: '',
            phone: '',
            gender: '',
            BDate: '',
            password: '',
            confirmPassword: '',
            type: 'Customer'
        }
    );

    const InfoChange = (e) => {
        let { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const register = () => {
        if (form.name == '' || form.phone == '' || form.gender == '' || form.BDate == '' || form.password == '' || form.confirmPassword == '' || form.type == '') {
            alert('يجب ملئ كافة الحقول')
            return;
        }
        if (form.password != form.confirmPassword) {
            alert('لا يوجد توافق بين الرقم السري وتأكيد الرقم السري');
            return;
        }

        if (form.type == 'Transport') {
            if (!form.numberOfPassengers || !form.licenceNumber || !form.carType) {
                alert('يجب ملئ كافة الحقول')
                return;
            }
        }

        delete form.confirmPassword;

        axios.post(global.config.server + `/auth/register`, form).then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            window.location = '/Customer/service-request';
        }).catch(error => {
            alert(error.response.data.errorMessage)

        });
    }

    return (
        <div className="login-body">
            <div className="card login-panel register-panel p-fluid">
                <div className="login-panel-content">
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-sm-12 p-md-12 logo-container p-text-right">
                            <span className="guest-sign-in p-text-right">
                                أهلا وسهلا بك في موقع <b>عالطريق</b>
                                <br />
                                الرجاء تسجيل حساب جديد
                            </span>
                        </div>
                        <div className="p-col-6">
                            <label className='p-text-right'>
                                الإسم الكامل
                            </label>
                            <div className="login-input">
                                <InputText id="name" name='name' type="text"
                                    value={form.name} onChange={InfoChange} />
                            </div>
                        </div>
                        <div className="p-col-6">
                            <label className='p-text-right'>رقم الهاتف</label>
                            <div className="login-input">
                                <InputText id="phone" name='phone' type="text"
                                    value={form.phone} onChange={InfoChange} />
                            </div>
                        </div>
                        <div className="p-col-6">
                            <label className='p-text-right'>كلمة السر</label>
                            <div className="login-input">
                                <InputText type="password" id="password" name="password"
                                    value={form.password} onChange={InfoChange} />
                            </div>
                        </div>
                        <div className="p-col-6">
                            <label className='p-text-right'>
                                تأكيد كلمة السر
                            </label>
                            <div className="login-input">
                                <InputText type="confirmPassword" id="confirmPassword" name="confirmPassword"
                                    value={form.confirmPassword} onChange={InfoChange} />
                            </div>
                        </div>
                        <div className='p-col-6'>
                            <label htmlFor="gender">
                                الجنس
                            </label>
                            <Dropdown value={form.gender} options={genders}
                                id="gender" name="gender" onChange={InfoChange} />
                        </div>
                        <div className="p-col-6">
                            <label className='p-text-right'>
                                تاريخ الميلاد
                            </label>
                            <div className="login-input">
                                <InputText id="BDate" name='BDate' type="text"
                                    value={form.BDate} onChange={InfoChange} />
                            </div>
                        </div>
                        <div className='p-col-6'>
                            <label htmlFor="gender">
                                نوع الحساب
                            </label>
                            <Dropdown value={form.type} options={[{ label: 'مرسل', value: 'Customer' }, { label: 'وسيلة نقل', value: 'Transport' }]}
                                id="type" name="type" onChange={InfoChange} />
                        </div>
                        {
                            form.type === 'Transport' &&
                            <>
                                <div className="p-col-6">
                                    <label className='p-text-right'>
                                        رقم السيارة
                                    </label>
                                    <div className="login-input">
                                        <InputText id="carNumber" name='carNumber' type="text"
                                            value={form.carNumber} onChange={InfoChange} />
                                    </div>
                                </div>
                                <div className="p-col-6">
                                    <label className='p-text-right'>
                                        نوع السيارة
                                    </label>
                                    <div className="login-input">
                                        <InputText id="carType" name='carType' type="text"
                                            value={form.carType} onChange={InfoChange} />
                                    </div>
                                </div>
                                <div className="p-col-6">
                                    <label className='p-text-right'>
                                        عدد الركاب
                                    </label>
                                    <div className="login-input">
                                        <InputText id="numberOfPassengers" name='numberOfPassengers' type="text"
                                            value={form.numberOfPassengers} onChange={InfoChange} />
                                    </div>
                                </div>
                            </>
                        }
                        <div className="p-col-12 p-sm-12 p-md-12 forgetpassword-container">
                            <a href="/login" className="forget-password">
                                لديك حساب مسبقا؟
                            </a>
                        </div>

                        <div className="p-col-12 p-sm-6 p-md-6" onClick={register}>
                            <Button label="تسجيل الحساب" icon="fa fa-save" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}