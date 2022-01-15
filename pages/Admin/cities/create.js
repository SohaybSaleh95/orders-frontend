import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { createCity } from '../../../services/cities'
import AdminLayout from '../layout'

function CityCreate() {
    const router = useRouter()
    const [form, setForm] = useState(
        {
            name: '',
            enabled: true,
        }
    )
    const [errors, setErrors] = useState({})

    const infoChange = (e) => {
        let { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const submitForm = () => {
        if (!form.name || !form.name.trim().length) {
            setErrors({
                name: 'يجب ادخال اسم المدينة'
            })
            return
        }

        createCity(form)
            .then(() => {
                toast.success('تم إضافة المدينة بنجاح!')
                router.back()
            }).catch((error) => {
                toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
            })
    }

    return (
        <AdminLayout>
            <div className="card">
                <div className="card-header">
                    مدينة جديدة
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className='col-sm-6'>
                            <div className="row form-group">
                                <label className="col-sm-2 required">
                                    الإسم:
                                </label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="text" name="name" id="name"
                                        value={form.name} onChange={infoChange} />
                                    {
                                        errors.name &&
                                        <div className="invalid-feedback">
                                            {errors.name}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-6'>
                            <div className="row form-group">
                                <label className="col-sm-2">
                                    فعالة:
                                </label>
                                <div className="col-sm-10">
                                    <div className='d-flex justify-content-start'>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" name="enabled" className="custom-control-input" value={true}
                                                onChange={infoChange} checked={true} />
                                            <label className="custom-control-label mr-5">نعم</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline mr-10">
                                            <input type="radio" name="enabled" className="custom-control-input"
                                                onChange={infoChange} value={false} />
                                            <label className="custom-control-label mr-5">
                                                لا
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="full-width text-center">
                        <button className="btn btn-primary" onClick={submitForm}>
                            اضافة المدينة
                        </button>
                    </div>

                </div>
            </div>
        </AdminLayout>
    )
}

export default CityCreate