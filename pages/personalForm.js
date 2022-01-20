import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'
import { InputText } from 'primereact/inputtext'
import { Toolbar } from 'primereact/toolbar'
import { Dropdown } from 'primereact/dropdown'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { update } from '../services/users'

export default function PersonalForm() {
    const genders = [
        {
            label: 'ذكر',
            value: 'male'
        },
        {
            label: 'أنثى',
            value: 'female'
        }
    ]
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
            <div className="card p-fluid">
                <h5>
                    المعلومات الشخصية
                </h5>
                <div className="p-formgrid p-grid">
                    <div className="p-field p-col-6">
                        <label htmlFor="name">
                            الإسم الكامل
                        </label>
                        <InputText id="name" name="name" type="text"
                            value={form.name} onChange={infoChange} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="identification">
                            الرقم الوطني
                        </label>
                        <InputText id="identification" name="identification" type="text"
                            value={form.identification} onChange={infoChange} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="phone">
                            رقم الجوال
                        </label>
                        <InputText id="phone" name="phone" type="text"
                            value={form.phone} onChange={infoChange} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="address">
                            العنوان
                        </label>
                        <InputText id="address" name="address" type="text"
                            value={form.address} onChange={infoChange} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="gender">
                            الجنس
                        </label>
                        <Dropdown value={form.gender} options={genders}
                            id="gender" name="gender" onChange={infoChange} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="gender">
                            تاريخ الميلاد
                        </label>
                        <Calendar value={form.BDate} showIcon={true}
                            dateFormat="yy-mm-dd" monthNavigator yearNavigator yearRange="1900:2100"
                            id="BDate" name="BDate" onChange={infoChange} />
                    </div>
                    {
                        form.type === 'Transport' &&
                        <>
                            <div className="p-field p-col-6">
                                <label htmlFor="carNumber">
                                    رقم السيارة
                                </label>
                                <InputText id="carNumber" name="carNumber" type="text"
                                    value={form.carNumber} onChange={infoChange} />
                            </div>
                            <div className="p-field p-col-6">
                                <label htmlFor="carType">
                                    نوع السيارة
                                </label>
                                <InputText id="carType" name="carType" type="text"
                                    value={form.carType} onChange={infoChange} />
                            </div>
                            <div className="p-field p-col-6">
                                <label htmlFor="numberOfPassengers">
                                    عدد الركاب
                                </label>
                                <InputText id="numberOfPassengers" name="numberOfPassengers" type="number"
                                    value={form.numberOfPassengers} onChange={infoChange} />
                            </div>
                        </>
                    }
                </div>
            </div>
            <Toolbar left={<Button icon="fa fa-save" label="حفظ التعديلات"
                onClick={submitForm} />} />
        </>
    )
}