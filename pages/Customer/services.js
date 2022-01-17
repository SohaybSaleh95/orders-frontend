import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { getOrders, updateRating } from '../../services/orders'
import CustomerLayout from './layout'

export default function Services() {
    const [services, setServices] = useState([])
    const [showRatingModal, setShowRatingModal] = useState(false)
    const [selectedService, setSelectedService] = useState({})
    const [currentRating, setCurrentRating] = useState(1)

    useEffect(() => {
        loadServices()
    }, [])

    const loadServices = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        getOrders({
            orderBy: user._id
        }).then((res) => {
            setServices(res.data)
        }).catch(() => { })
    }

    const onUpdateRatingClicked = (service) => {
        setSelectedService(service)
        setShowRatingModal(true)
    }

    const onRatingClosed = (result) => {
        if (result) {
            updateRating(selectedService._id, currentRating)
                .then(() => {
                    loadServices()
                    toast.success("تم تعديل التقييم بنجاح!")
                    setShowRatingModal(false)
                }).catch((error) => {
                    console.log(error)
                    toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
                })
        } else {
            setShowRatingModal(false)
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
                                <th>
                                    التقييم
                                </th>
                                <th width="120">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !services.length &&
                                <tr>
                                    <td colSpan={10}>
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
                                                {service.rating || 'لم يتم التقييم بعد'}
                                            </td>
                                            <td>
                                                <button className='btn btn-primary' onClick={() => onUpdateRatingClicked(service)}>
                                                    تقييم
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

            <Modal show={showRatingModal} onHide={onRatingClosed}>
                <Modal.Body>
                    <div className='text-center'>
                        الرجاء اختيار التقييم الذي تريده للسائق
                    </div>
                    <h3 className='text-center'>
                        {currentRating}
                    </h3>
                    <div className="form-group">
                        <input className="form-control" type="range" name="rating" id="rating"
                            min={0} max={5} onChange={(e) => setCurrentRating(e.target.value)}
                            value={currentRating} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-secondary' onClick={() => onRatingClosed(false)}>
                        إلغاء
                    </button>
                    <button className='btn btn-primary' onClick={() => onRatingClosed(true)}>
                        حفظ
                    </button>
                </Modal.Footer>
            </Modal>
        </CustomerLayout>
    )
}