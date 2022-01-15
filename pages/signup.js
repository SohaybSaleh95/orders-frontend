import { useState } from "react";
import axios from "axios";
import './../config';

export default function SignUpForm() {

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

    const signUp = () => {
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
            window.location = '/Customer/service-request';
        }).catch(error => {
            alert(error.response.data.errorMessage)

        });
    }



    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src="/imgs/orders.png" id="icon" alt="User Icon" />
                </div>

                <input type="text" className="fadeIn first input" value={form.name} onChange={InfoChange} name="name" placeholder="الاسم الكامل" />
                <input type="text" id="phone" className="fadeIn second input" value={form.phone} onChange={InfoChange} name="phone" placeholder="رقم الهاتف" />
                <select className="fadeIn fourth input" id="gender" name="gender" value={form.gender} onChange={InfoChange}>
                    <option selected={true} disabled={true} value="">-- اختر الجنس --</option>
                    <option value="male">ذكر</option>
                    <option value="female">انثى</option>
                </select>
                <input type="text" id="BDate" className="fadeIn second input" name="BDate" value={form.BDate} onChange={InfoChange} placeholder="تاريخ الميلاد" />
                <input type="password" id="password" className="fadeIn third input" name="password" value={form.password} onChange={InfoChange} placeholder="كلمة المرور" />
                <input type="password" id="confirmPassword" className="fadeIn fourth input" value={form.confirmPassword} onChange={InfoChange} name="confirmPassword" placeholder="تأكيد كلمة المرور" />
                <select className="fadeIn fourth input" id="type" name="type" value={form.type} onChange={InfoChange}>
                    <option selected={true} disabled={true} value="">-- اختر نوع التسجيل --</option>
                    <option value="Customer">مرسل</option>
                    <option value="Transport">وسيلة نقل</option>
                </select>
                {
                    form.type === 'Transport' &&
                    <>
                        <input type="text" id="licenceNumber" className="fadeIn second input" name="licenceNumber" value={form.licenceNumber} onChange={InfoChange} placeholder="رقم السيارة" />
                        <input type="text" id="carType" className="fadeIn second input" name="carType" value={form.carType} onChange={InfoChange} placeholder="نوع السيارة" />
                        <input type="number" id="numberOfPassengers" className="fadeIn second input" name="numberOfPassengers" numberOfPassengers={form.BDate} onChange={InfoChange} placeholder="عدد الركاب" />

                    </>
                }
                <input type="submit" className="fadeIn fourth" value="تسجيل حساب جديد" onClick={signUp} />

                <div id="formFooter">
                    <a className="underlineHover" href="login">تسجيل دخول ؟</a>
                </div>
            </div>
        </div>
    )
}