import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { getCities } from '../../services/cities';
import { createOrder, updateOrder, getOrders } from '../../services/orders';
import CustomerLayout from "./layout";

export default function ServiceRequest() {
    const router = useRouter()
    const [form, setForm] = useState({});
    const [cities, setCities] = useState([])
    const [orders, setOrders] = useState([])
    const [selectedOrder, setSelectedOrder] = useState(null)

    useEffect(() => {
        loadCities()
    }, [])

    useEffect(() => {
        loadOrders()
    }, [form])

    const loadCities = () => {
        getCities().
            then((res) => {
                setCities(res.data)
            }).catch(() => { })
    }

    const infoChange = (e) => {
        let { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const loadOrders = () => {
        getOrders({
            ...form,
            type: 'order'
        })
            .then((res) => {
                setOrders(res.data)
                setSelectedOrder(null)
            }).catch(() => { })
    }

    const minDate = () => {
        const date = new Date().toISOString();
        const lastIndex = date.lastIndexOf(':');
        return date.substring(0, lastIndex);
    }

    const submitForm = () => {
        if (!form.orderType || !form.fromCity || !form.toCity || !form.date) {
            toast.error("يجب ملئ جميع الحقول الاجبارية")
            return;
        }

        if (form.orderType == 'PEOPLE') {
            if (!form.passengers || form.passengers < 1) {
                toast.error("عدد الركاب يجب ان يكون اكبر من ١")
                return;
            }
        }

        if (selectedOrder) {
            updateOrder(selectedOrder, form)
                .then(() => {
                    toast.success("تم إضافة الطلب بنجاح!")
                    router.push('/Customer/services')
                }).catch(() => {
                    toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
                })
        } else {
            createOrder(form).then(() => {
                toast.success("تم إضافة الطلب بنجاح!")
                router.push('/Customer/services')
            }).catch((error) => {
                toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
            })
        }
    }

    return (
        <CustomerLayout>
            <div className="card">
                <div className="card-header">طلب خدمة</div>
                <div className="card-body">
                    <div className="row form-group">
                        <label className="col-sm-2 required">نوع الخدمة</label>
                        <div className="col-sm-4">
                            <select className="form-control" id="orderType" name="orderType"
                                value={form.orderType} onChange={infoChange}>
                                <option selected={true} disabled={true} value="">-- اختر نوع الخدمة --</option>
                                <option value="PEOPLE">
                                    نقل أشخاص
                                </option>
                                <option value="PACKAGE">
                                    نقل طرد
                                </option>
                            </select>
                        </div>

                        {
                            form.orderType == 'PEOPLE' &&
                            <>
                                <label className="col-sm-2 required">
                                    عدد الأشخاص
                                </label>
                                <div className="col-sm-4">
                                    <input className="form-control" type="number" id="passengers" name="passengers"
                                        value={form.passengers} onChange={infoChange} min={1} />
                                </div>
                            </>
                        }
                    </div>

                    <div className="row form-group">

                        <label className="col-sm-2 required">من مدينة</label>
                        <div className="col-sm-4">
                            <select className="form-control" id="fromCity" name="fromCity"
                                value={form.fromCity} onChange={infoChange}>
                                <option selected={true} disabled={true} value="">-- اختر المدينة --</option>
                                {
                                    cities.map((city) => {
                                        return (
                                            <option value={city._id}>
                                                {city.name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <label className="col-sm-2 required">إلى مدينة</label>
                        <div className="col-sm-4">
                            <select className="form-control" id="toCity" name="toCity"
                                value={form.toCity} onChange={infoChange}>
                                <option selected={true} disabled={true} value="">-- اختر المدينة --</option>
                                {
                                    cities.map((city) => {
                                        return (
                                            <option value={city._id}>
                                                {city.name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="row form-group">

                        <label className="col-sm-2 required">من تاريخ \ وقت</label>
                        <div className="col-sm-4">
                            <input className="form-control" type="datetime-local" onChange={infoChange}
                                id="date" name="date" min={minDate()} />
                        </div>
                    </div>
                    <div className="row form-group">
                        <label className="col-sm-2">معلموات اضافية \ ملاحظات</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" rows="5" cols="5"
                                id="notes" name="notes" onChange={infoChange}></textarea>
                        </div>
                    </div>
                    <hr />
                    <h4 className='text-center'>
                        الخدمات المتوفر
                    </h4>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>
                                    نوع الخدمة
                                </th>
                                <th>
                                    تاريخ الخدمة
                                </th>
                                <th>
                                    من مدينة
                                </th>
                                <th>
                                    إلى مدينة
                                </th>
                                <th>
                                    الإسم
                                </th>
                                <th>
                                    رقم الهاتف
                                </th>
                                <th>
                                    عدد الركاب
                                </th>
                                <th>
                                    ملاحظات
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !orders.length &&
                                <tr>
                                    <td colSpan={9}>
                                        لم يتم العثور على خدمات متوافقة
                                    </td>
                                </tr>
                            }
                            {
                                orders.map((order) => {
                                    return (
                                        <tr>
                                            <td>
                                                <input type="checkbox" checked={order._id === selectedOrder}
                                                    onChange={() => setSelectedOrder(order._id)} />
                                            </td>
                                            <td>
                                                {order.orderType === 'PEOPLE' ? 'نقل أشخاص' : 'نقل طرد'}
                                                {
                                                    order.orderType === 'PEOPLE' &&
                                                    <span className='badge bg-primary mr-5'>
                                                        {order.passengers}
                                                    </span>
                                                }
                                            </td>
                                            <td>
                                                {moment(order.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                                            </td>
                                            <td>
                                                {order.fromCity.name}
                                            </td>
                                            <td>
                                                {order.toCity.name}
                                            </td>
                                            <td>
                                                {order.transportBy.name}
                                            </td>
                                            <td>
                                                {order.transportBy.phone}
                                            </td>
                                            <td>
                                                {order.passengers}
                                            </td>
                                            <td>
                                                {order.notes}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="full-width text-center">
                        <button className="btn btn-primary" onClick={submitForm}>تسجيل الخدمة</button>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    )
}