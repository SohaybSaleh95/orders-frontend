import React, { useEffect, useState } from 'react'
import { getUsersByType } from '../../../services/users';
import AdminLayout from '../layout'

export default function DriversList() {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        loadDrivers();
    }, [])

    const loadDrivers = () => {
        getUsersByType('Transport')
            .then((res) => {
                setDrivers(res.data)
            }).catch(() => { })
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !drivers.length &&
                                <tr>
                                    <td colSpan={6}>
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
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </AdminLayout>
    )
}