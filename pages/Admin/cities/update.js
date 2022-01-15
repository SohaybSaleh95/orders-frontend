import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { updateCity, getCity } from '../../../services/cities'
import AdminLayout from '../layout'

function CityUpdate() {
    const router = useRouter()
    const [form, setForm] = useState(
        {
            _id: null,
            name: '',
            enabled: true,
        }
    )
    const [errors, setErrors] = useState({})

    useEffect(() => {
        getCity(router.query.id)
            .then((res) => {
                setForm(res.data)
            }).catch((error) => {
                toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
            })
    }, [])

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

        updateCity(form._id, form)
            .then(() => {
                toast.success('تم تعديل المدينة بنجاح!')
                router.back()
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <AdminLayout>
            <div className="card">
                <div className="card-header">
                    تعديل المدينة
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
                                                onChange={infoChange} checked={form.enabled == 'true'} />
                                            <label className="custom-control-label mr-5">نعم</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline mr-10">
                                            <input type="radio" name="enabled" className="custom-control-input"
                                                onChange={infoChange} value={false} checked={form.enabled != 'true'} />
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
                            تعديل المدينة
                        </button>
                    </div>

                </div>
            </div>
        </AdminLayout>
    )
}

export default CityUpdate