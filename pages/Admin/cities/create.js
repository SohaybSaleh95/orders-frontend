import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { createCity } from '../../../services/cities'
import Layout from '../../layout'
import { RadioButton } from 'primereact/radiobutton';
import { InputText } from 'primereact/inputtext';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';

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
        <Layout>
            <div className="card p-fluid">
                <h5>
                    مدينة جديدة
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
            <Toolbar left={<Button icon="fa fa-save" label="إضافة المدينة"
                onClick={submitForm} />} />
        </Layout>
    )
}

export default CityCreate