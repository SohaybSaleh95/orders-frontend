import React, { useEffect, useState } from 'react'
import { getUsersByType, updateRating } from '../../../services/users';
import AdminLayout from '../layout'
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function DriversList() {
    const [drivers, setDrivers] = useState([]);
    const [showRatingModal, setShowRatingModal] = useState(false)
    const [selectedDriver, setSelectedDriver] = useState({})
    const [currentRating, setCurrentRating] = useState(1)

    useEffect(() => {
        loadDrivers();
    }, [])

    const loadDrivers = () => {
        getUsersByType('Transport')
            .then((res) => {
                setDrivers(res.data)
            }).catch(() => { })
    }

    const calculateRating = (driver) => {
        if (!driver.ratings?.length) {
            return 'لم يتم تقييم السائق'
        }
        let total = 0;
        for (let i = 0; i < driver.ratings.length; i++) {
            total += driver.ratings[i].rating
        }

        return total / driver.ratings.length;
    }

    const onUpdateRatingClicked = (driver) => {
        setSelectedDriver(driver)
        setShowRatingModal(true)
    }

    const onRatingClosed = (result) => {
        if (result) {
            updateRating(selectedDriver._id, currentRating)
                .then(() => {
                    loadDrivers()
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
        <AdminLayout>
            <div className="card">
                <div className="card-header">
                    <div className='d-flex justify-content-between'>
                        <h3>
                            السائقين
                        </h3>
                    </div>
                </div>
                <div className="card-body">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>
                                    الإسم
                                </th>
                                <th>
                                    رقم الهاتف
                                </th>
                                <th>
                                    العنوان
                                </th>
                                <th>
                                    رقم السيارة
                                </th>
                                <th>
                                    نوع السيارة
                                </th>
                                <th>
                                    عدد الركاب
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
                                !drivers.length &&
                                <tr>
                                    <td colSpan={8}>
                                        لم يتم العثور على سائقين
                                    </td>
                                </tr>
                            }
                            {
                                drivers.map((driver) => {
                                    return (
                                        <tr key={driver._id}>
                                            <td>
                                                {driver.name}
                                            </td>
                                            <td>
                                                {driver.phone}
                                            </td>
                                            <td>
                                                {driver.address}
                                            </td>
                                            <td>
                                                {driver.carNumber}
                                            </td>
                                            <td>
                                                {driver.carType}
                                            </td>
                                            <td>
                                                {driver.numberOfPassengers}
                                            </td>
                                            <td>
                                                {calculateRating(driver)}
                                            </td>
                                            <td>
                                                <button className='btn btn-primary' onClick={() => onUpdateRatingClicked(driver)}>
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
        </AdminLayout>
    )
}