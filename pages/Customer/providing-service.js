import NavBar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default function ServiceRequest() {
    return (
        <div>

            <NavBar/>

            <div className='container-fluid'>

<div className="card">
    <div className="card-header">تقديم خدمة</div>
    <div className="card-body">

        <div className="row mb-5 row form-group">
            <label className="col-sm-2">نوع السيارة</label>
            <div className="col-sm-4">
                <input className="form-control" type="text"/>
            </div>

            <label className="col-sm-2">رقم السيارة </label>
            <div className="col-sm-4">
                <input className="form-control" type="text"/>
            </div>
        </div>

        <div className="row mb-5 row form-group">

            <label className="col-sm-2">من مدينة</label>
            <div className="col-sm-4">
                <input className="form-control" type="text"/>
            </div>

            <label className="col-sm-2">إلى مدينة</label>
            <div className="col-sm-4">
                <input className="form-control" type="text"/>
            </div>

        </div>

        <div className="row mb-5 row form-group">

            <label className="col-sm-2">من تاريخ \ وقت</label>
            <div className="col-sm-4">
                <input className="form-control" type="datetime-local"/>
            </div>

            <label className="col-sm-2">إلى تاريخ \ وقت</label>
            <div className="col-sm-4">
                <input className="form-control" type="datetime-local"/>
            </div>

        </div>

        <div className="row mb-5 row form-group">
            <label className="col-sm-2"> عدد مقاعد السيارة</label>
            <div className="col-sm-4">
                <input className="form-control" type="text"/>
            </div>

            <label className="col-sm-2"> عدد الراكبين </label>
            <div className="col-sm-4">
                <input className="form-control" type="text"/>
            </div>
        </div>

        <div className="row mb-4 row form-group">
            <label className="col-sm-3">هل ترغب وسيلة النقل بنقل شخص معها ؟</label>
            <div className="col-sm-3">
            <input type="radio" value="yes" name="yes" /> Yes
            </div>
            <div className="col-sm-3">
            <input type="radio" value="no" name="no" /> No
            </div>
        </div>

        <div className="full-width text-center">
                <button className="btn btn-primary">تقديم الخدمة</button>

        </div>

    </div>
</div>

</div>
        </div>
    )}