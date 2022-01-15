import React, { useEffect, useState } from 'react'
import AdminLayout from '../layout'
import { deleteCity, getCities } from '../../../services/cities';
import { useRouter } from 'next/router';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function Cities() {
    const [cities, setCities] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [selectedCity, setSelectedCity] = useState({})
    const router = useRouter()

    useEffect(() => {
        loadCities()
    }, [])

    const loadCities = () => {
        getCities()
            .then((res) => {
                setCities(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    const onDeleteClicked = (city) => {
        setSelectedCity(city)
        setShowDeleteModal(true)
    }

    const onDeleteModalClosed = (result) => {
        if (!result) {
            setShowDeleteModal(false)
            return
        }

        deleteCity(selectedCity._id)
            .then(() => {
                toast.success('تم حذف المدينة بنجاح!')
                loadCities()
                setShowDeleteModal(false)
            }).catch((error) => {
                toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
            })
    }

    return (
        <AdminLayout>
            <div className="card">
                <div className="card-header">
                    <div className='d-flex justify-content-between'>
                        <h3>
                            المدن
                        </h3>
                        <button className='btn btn-primary' onClick={() => router.push('/Admin/cities/create')}>
                            إضافة مدينة
                        </button>
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
                                    فعال
                                </th>
                                <th width="120">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !cities.length &&
                                <tr>
                                    <td colSpan={3}>
                                        لم يتم العثور على مدن
                                    </td>
                                </tr>
                            }
                            {
                                cities.map((city) => {
                                    return (
                                        <tr key={city._id}>
                                            <td>
                                                {city.name}
                                            </td>
                                            <td>
                                                {
                                                    city.enabled ?
                                                        'نعم' :
                                                        'لا'
                                                }
                                            </td>
                                            <td>
                                                <button className='btn btn-primary'
                                                    onClick={() => router.push(`/Admin/cities/update?id=${city._id}`)}>
                                                    <i className='fa fa-edit'></i>
                                                </button>
                                                <button className='btn btn-danger mr-5' onClick={() => onDeleteClicked(city)}>
                                                    <i className='fa fa-trash'></i>
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
                        هل أنت متاكد أنك تريد حذف المدينة ({selectedCity.name})؟
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
        </AdminLayout>
    )
}