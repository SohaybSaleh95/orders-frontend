import NavBar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Personal() {
    return (
        <div>

            <NavBar />


            <div className='container-fluid'>

                <div className="card">
                    <div className="card-header"> المعلومات الشخصية</div>
                    <div className="card-body">

                        <div className="row mb-5 row form-group">
                            <label className="col-sm-2">الاسم الكامل</label>
                            <div className="col-sm-4">
                                <input className="form-control" type="text" />
                            </div>

                            <label className="col-sm-2">الرقم الوطني </label>
                            <div className="col-sm-4">
                                <input className="form-control" type="text" />
                            </div>
                        </div>

                        <div className="row mb-5 row form-group">

                            <label className="col-sm-2"> رقم الجوال</label>
                            <div className="col-sm-4">
                                <input className="form-control" type="text" />
                            </div>

                            <label className="col-sm-2"> العنوان</label>
                            <div className="col-sm-4">
                                <input className="form-control" type="text" />
                            </div>

                        </div>

                        <div className="row mb-5 row form-group">

                            <label className="col-sm-2">الجنس</label>
                            <div className="col-sm-4">
                                <select className="form-control" id="gender" name="gender">
                                    <option selected={true} disabled={true} value="">-- اختر الجنس --</option>
                                    <option value="male">ذكر</option>
                                    <option value="female">انثى</option>
                                </select>
                            </div>


                            <label className="col-sm-2">تاريخ الميلاد</label>
                            <div className="col-sm-4">
                                <input className="form-control" type="text" />
                            </div>

                        </div>

                        <div className="row mb-5 row form-group">

                            <label className="col-sm-2">الرقم السري</label>
                            <div className="col-sm-4">
                                <input className="form-control" type="password" placeholder="********" />
                            </div>


                        </div>

                        <div className="full-width text-center">
                            <button className="btn btn-primary"> تعديل المعلومات</button>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}