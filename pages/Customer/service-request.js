import NavBar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default function ServiceRequest() {
    return (
        <div>

            <NavBar/>

            <div className='container-fluid'>

                <div className="card">
                    <div className="card-header">طلب خدمة</div>
                    <div className="card-body">

                        <div className="row form-group">
                            <label className="col-sm-2">نوع الخدمة</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text"/>
                            </div>
                        </div>

                        <div className="row form-group">

                            <label className="col-sm-2">من مدينة</label>
                            <div className="col-sm-4">
                                <select className="form-control" id="gender" name="gender">
                                    <option selected={true} disabled={true} value="">-- اختر المدينة --</option>
                                </select>
                            </div>

                            <label className="col-sm-2">إلى مدينة</label>
                            <div className="col-sm-4">
                                <select className="form-control" id="gender" name="gender">
                                    <option selected={true} disabled={true} value="">-- اختر المدينة --</option>
                                </select>
                            </div>

                        </div>

                        <div className="row form-group">

                            <label className="col-sm-2">من تاريخ \ وقت</label>
                            <div className="col-sm-4">
                                <input className="form-control" type="datetime-local"/>
                            </div>

                            <label className="col-sm-2">إلى تاريخ \ وقت</label>
                            <div className="col-sm-4">
                                <input className="form-control" type="datetime-local"/>
                            </div>

                        </div>

                        <div className="row form-group">
                            <label className="col-sm-2">معلموات اضافية \ ملاحظات</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" rows="5" cols="5"></textarea>
                            </div>
                        </div>



                        <div className="full-width text-center">
                                <button className="btn btn-primary">تسجيل الخدمة</button>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}