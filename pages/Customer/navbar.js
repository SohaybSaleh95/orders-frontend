import 'bootstrap/dist/css/bootstrap.css'; // Add this line

export default function NavBar() {
    return (

    <nav className="navbar navbar-expand-sm bg-dark navbar-dark" dir="rtl">

        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="">المعلومات الشخصية</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/Customer/service-request">طلب خدمة</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="">تقديم خدمة</a>
            </li>

            <li className="nav-item" >
                <a className="nav-link" href="">تسجيل خروج</a>
            </li>


        </ul>
    </nav>
    )
}