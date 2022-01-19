import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { updateCity, getCity } from '../../../services/cities'
import Layout from '../../layout'
import { RadioButton } from 'primereact/radiobutton';
import { InputText } from 'primereact/inputtext';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';

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
        <Layout>
            <div className="card p-fluid">
                <h5>
                    تعديل المدينة
                </h5>
                <div className="p-formgrid p-grid">
                    <div className="p-field p-col-6">
                        <label htmlFor="name">
                            الإسم
                        </label>
                        <InputText id="name" name="name" type="text"
                            value={form.name} onChange={infoChange} />
                        {
                            errors.name &&
                            <small className="p-error p-d-block">
                                {errors.name}
                            </small>
                        }
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="name2">
                            فعال
                        </label>
                        <div className='p-d-flex'>
                            <div className="p-field-radiobutton">
                                <RadioButton name="enabled" id="enabled" value={true} onChange={infoChange} checked={form.enabled} />
                                <label>نعم</label>
                            </div>
                            <div className="p-field-radiobutton">
                                <RadioButton name="enabled" id="enabled" value={false} onChange={infoChange} checked={!form.enabled} />
                                <label>لا</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toolbar left={<Button icon="fa fa-save" label="حفظ"
                onClick={submitForm} />} />
        </Layout>
    )
}

export default CityUpdate