import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react'
import { getUsersByType } from '../../../services/users';
import Layout from '../../layout';

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
        <Layout>
            <div className="card p-fluid">
                <h5>
                    السائقين
                </h5>
                <DataTable value={drivers}>
                    <Column header="الإسم" field="name" />
                    <Column header="رقم الهاتف" field="phone" />
                    <Column header="العنوان" field="address" />
                    <Column header="نوع السيارة" field="carType" />
                    <Column header="رقم السيارة" field="carNumber" />
                    <Column header="عدد الركاب" field="numberOfPassengers" />
                </DataTable>
            </div>
        </Layout>
    )
}