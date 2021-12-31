export default function SignUpForm() {
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src="/imgs/orders.png" id="icon" alt="User Icon"/>
                </div>

                <form method="post">
                    <input type="text"  className="fadeIn first" name="fullName" placeholder="الاسم الكامل"/>
                    <input type="text" id="phone" className="fadeIn second" name="phone" placeholder="رقم الهاتف"/>
                    <select className="fadeIn fourth" id="gender" name="gender">
                        <option selected={true} disabled={true} >-- اختر الجنس --</option>
                        <option value="male">ذكر</option>
                        <option value="female">انثى</option>
                    </select>
                    <input type="text" id="bdate" className="fadeIn second" name="bdate" placeholder="تاريخ الميلاد"/>
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="كلمة المرور"/>
                    <input type="password" id="confirmPassword" className="fadeIn fourth" name="confirmPassword" placeholder="تأكيد كلمة المرور"/>

                    <input type="submit" className="fadeIn fourth" value="تسجيل حساب جديد"/>
                </form>

                <div id="formFooter">
                    <a className="underlineHover" href="login">تسجيل دخول ؟</a>
                </div>
            </div>
        </div>
    )
}