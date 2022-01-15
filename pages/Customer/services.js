import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { getOrders } from '../../services/orders'
import CustomerLayout from './layout'

export default function Services() {
    const [services, setServices] = useState([])

    useEffect(() => {
        loadServices()
    }, [])

    const loadServices = () => {
        getOrders().then((res) => {
            setServices(res.data)
        }).catch(() => { })
    }


    return (
        <CustomerLayout>
            <div className="card">
                <div className="card-header">
                    <div className='d-flex justify-content-between'>
                        <h3>
                            الطلبات
                        </h3>
                    </div>
                </div>
                <div className="card-body">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>
                                    نوع الخدمة
                                </th>
                                <th>
                                    إسم السائق
                                </th>
                                <th>
                                    رقم هاتف
                                </th>
                                <th>
                                    من مدينة
                                </th>
                                <th>
                                    إلى مدينة
                                </th>
                                <th>
                                    تاريخ النقل
                                </th>
                                <th>
                                    وقت الإنشاء
                                </th>
                                <th>
                                    ملاحظات اضافية
                                </th>
                                <th width="120">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !services.length &&
                                <tr>
                                    <td colSpan={9}>
                                        لم يتم العثور على طلبات سابقة
                                    </td>
                                </tr>
                            }
                            {
                                services.map((service) => {
                                    return (
                                        <tr key={service._id}>
                                            <td>
                                                {service.orderType === 'PEOPLE' ? 'نقل أشخاص' : 'نقل طرد'}
                                                {
                                                    service.orderType === 'PEOPLE' &&
                                                    <span className='badge bg-primary mr-5'>
                                                        {service.passengers}
                                                    </span>
                                                }
                                            </td>
                                            <td>
                                                {service.transportBy?.name || 'غير محدد'}
                                            </td>
                                            <td>
                                                {service.transportBy?.phone}
                                            </td>
                                            <td>
                                                {service.fromCity.name}
                                            </td>
                                            <td>
                                                {service.toCity.name}
                                            </td>
                                            <td>
                                                {moment(service.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                                            </td>
                                            <td>
                                                {moment(service.createdAt).fromNow()}
                                            </td>
                                            <td>
                                                {service.notes}
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </CustomerLayout>
    )
}