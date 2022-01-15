import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { update } from '../services/users'

export default function PersonalForm() {
    const [form, setForm] = useState({})

    useEffect(() => {
        setForm(JSON.parse(localStorage.getItem("user")))
    }, [])

    const infoChange = (e) => {
        let { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const submitForm = () => {
        update(form)
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data))
                toast.success("تم تعديل المعلومات الشخصية بنجاح!")
            }).catch((error) => {
                toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
            })
    }

    return (
        <>
            <div className="card">
                <div className="card-header"> المعلومات الشخصية</div>
                <div className="card-body">

                    <div className="row mb-5 row form-group">
                        <label className="col-sm-2">الاسم الكامل</label>
                        <div className="col-sm-4">
                            <input className="form-control" type="text" id="name" name="name"
                                onChange={infoChange} value={form.name} />
                        </div>

                        <label className="col-sm-2">الرقم الوطني </label>
                        <div className="col-sm-4">
                            <input className="form-control" type="text" id="identification"
                                name="identification" value={form.identification} onChange={infoChange} />
                        </div>
                    </div>

                    <div className="row mb-5 row form-group">

                        <label className="col-sm-2"> رقم الجوال</label>
                        <div className="col-sm-4">
                            <input className="form-control" type="text" id="phone" name="phone"
                                value={form.phone} onChange={infoChange} />
                        </div>

                        <label className="col-sm-2"> العنوان</label>
                        <div className="col-sm-4">
                            <input className="form-control" type="text" id="address" name="address"
                                value={form.address} onChange={infoChange} />
                        </div>

                    </div>

                    <div className="row mb-5 row form-group">

                        <label className="col-sm-2">الجنس</label>
                        <div className="col-sm-4">
                            <select className="form-control" id="gender" name="gender"
                                onChange={infoChange}>
                                <option selected={true} disabled={true} value="">-- اختر الجنس --</option>
                                <option value="male" selected={form.gender === 'male'}>ذكر</option>
                                <option value="female" selected={form.gender === 'female'}>انثى</option>
                            </select>
                        </div>


                        <label className="col-sm-2">تاريخ الميلاد</label>
                        <div className="col-sm-4">
                            <input className="form-control" type="text" id="BDate" name="BDate"
                                onChange={infoChange} value={form.BDate} />
                        </div>
                    </div>

                    {
                        form.type === "Transport" && (
                            <>
                                <div className="row mb-5 row form-group">
                                    <label className="col-sm-2">رقم السيارة</label>
                                    <div className="col-sm-4">
                                        <input className="form-control" type="text" id="carNumber" name="carNumber"
                                            value={form.carNumber} onChange={infoChange} />
                                    </div>
                                    <label className="col-sm-2">نوع السيارة</label>
                                    <div className="col-sm-4">
                                        <input className="form-control" type="text" id="carType" name="carType"
                                            value={form.carType} onChange={infoChange} />
                                    </div>
                                </div>
                                <div className="row mb-5 row form-group">
                                    <label className="col-sm-2">عدد الركاب</label>
                                    <div className="col-sm-4">
                                        <input className="form-control" type="number" id="numberOfPassengers" name="numberOfPassengers"
                                            value={form.numberOfPassengers} onChange={infoChange} />
                                    </div>
                                </div>
                            </>
                        )
                    }

                    <div className="full-width text-center">
                        <button className="btn btn-primary" onClick={submitForm}> تعديل المعلومات</button>
                    </div>

                </div>
            </div>
        </>
    )
}