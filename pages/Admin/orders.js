import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { deleteOrder, getOrders, updateStatus } from '../../services/orders'
import CustomerLayout from './layout'

export default function Orders() {
    const [services, setServices] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [selectedService, setSelectedService] = useState(null)

    useEffect(() => {
        loadServices()
    }, [])

    const loadServices = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        getOrders().then((res) => {
            setServices(res.data)
        }).catch(() => { })
    }

    const statusChange = (service, e) => {
        updateStatus(service._id, e.target.value)
            .then(() => {
                toast.success("تم تعديل الحالة بنجاح!")
            }).catch((error) => {
                toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
            })
    }

    const onDeleteClicked = (service) => {
        setSelectedService(service)
        setShowDeleteModal(true)
    }

    const onDeleteModalClosed = (result) => {
        if (result) {
            deleteOrder(selectedService._id)
                .then(() => {
                    loadServices()
                    setShowDeleteModal(false)
                }).catch((error) => {
                    toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
                })
        }
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
                                    اسم الزبون
                                </th>
                                <th>
                                    رقم الزبون
                                </th>
                                <th>
                                    إسم السائق
                                </th>
                                <th>
                                    رقم السائق
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
                                <th>
                                    الحالة
                                </th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !services.length &&
                                <tr>
                                    <td colSpan={12}>
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
                                                {service.orderBy?.name || 'غير محدد'}
                                            </td>
                                            <td>
                                                {service.orderBy?.phone}
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
                                                <select id="status" name="status"
                                                    className='form-contorl'
                                                    value={service.status} onChange={(e) => statusChange(service, e)}>
                                                    <option disabled>--- اختر الحالة ---</option>
                                                    <option value="NEW">جديد</option>
                                                    <option value="WITH_SENDER">مع المرسل</option>
                                                    <option value="WITH_DRIVER">مع السائق</option>
                                                    <option value="DELIVERED">تم التسليم</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => onDeleteClicked(service)}>
                                                    <i className='fa fa-trash' />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal show={showDeleteModal} onHide={onDeleteModalClosed}>
                <Modal.Body>
                    <div className='text-right'>
                        هل أنت متأكد انك تريد حذف هذا الطلب
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-secondary' onClick={() => onDeleteModalClosed(false)}>
                        لا
                    </button>
                    <button className='btn btn-primary' onClick={() => onDeleteModalClosed(true)}>
                        نعم
                    </button>
                </Modal.Footer>
            </Modal>
        </CustomerLayout>
    )
}