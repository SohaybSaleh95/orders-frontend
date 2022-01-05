import 'bootstrap/dist/css/bootstrap.css'; // Add this line

export default function NavBar() {

    function logout(){
      localStorage.clear();
      
    }
    return (

    <nav className="navbar navbar-expand-sm bg-dark navbar-dark" dir="rtl">

        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/Customer/personal">المعلومات الشخصية</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/Customer/service-request">طلب خدمة</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/Customer/providing-service">تقديم خدمة</a>
            </li>

            <li className="nav-item" >
                <a className="nav-link" onChange={logout} href="/login">تسجيل خروج</a>
            </li>


        </ul>
    </nav>
    )
}