import {useState} from "react";
import axios from "axios";
import './../config';

export default function LoginForm() {

    const [form, setForm] = useState(
        {
            phone: '',
            password: '',
        }
    );

    const InfoChange = (e) => {
        let {name, value} = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }


    const login = () => {
        if (form.phone == '' || form.password == '') {
            alert('يجب ملئ كافة الحقول')
            return ;
        }

        axios.post(global.config.server + `/auth/login`,form).then(res => {
            localStorage.setItem('token', res.data.token)
            window.location = '/Customer/service-request'
        }).catch(error => {
            alert(error.response.data.errorMessage)
        });
    }

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src="/imgs/orders.png" id="icon" alt="User Icon"/>
                </div>

                <input type="text" id="login" className="fadeIn second input" value={form.phone} onChange={InfoChange} name="phone"
                       placeholder="رقم الهاتف"/>
                <input type="password" id="password" className="fadeIn third input" value={form.password} onChange={InfoChange}
                       name="password" placeholder="********"/>
                <input type="submit" className="fadeIn fourth" value="تسجيل دخول" onClick={login}/>

                <div id="formFooter">
                    <a className="underlineHover" href="signup">إنشاء حساب جديد ؟</a>
                </div>
            </div>
        </div>
    )
}