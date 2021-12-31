
export default function LoginForm() {
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src="/imgs/orders.png" id="icon" alt="User Icon"/>
                </div>

                <form method="post">
                    <input type="text" id="login" className="fadeIn second" name="phone" placeholder="رقم الهاتف"/>
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="********"/>
                    <input type="submit" className="fadeIn fourth" value="تسجيل دخول"/>
                </form>

                <div id="formFooter">
                    <a className="underlineHover" href="signup">إنشاء حساب جديد ؟</a>
                </div>
            </div>
        </div>
    )
}