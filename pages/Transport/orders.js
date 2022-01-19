import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { getOrders } from '../../services/orders'
import Layout from '../layout'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

export default function Orders() {
    const [services, setServices] = useState([])

    useEffect(() => {
        loadServices()
    }, [])

    const loadServices = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        getOrders({
            transportBy: user._id
        }).then((res) => {
            setServices(res.data)
        }).catch(() => { })
    }

    const getOrderType = (rowData) => {
        switch (rowData.orderType) {
            case 'PEOPLE':
                return 'نقل أشخاص (' + rowData.passengers + ')';
            default:
                return 'نقل طرد';
        }
    }

    return (
        <Layout>
            <div className="card p-fluid">
                <h5>
                    الطلبات السابقة
                </h5>
                <DataTable value={services}>
                    <Column header="نوع الخدمة" body={getOrderType} />
                    <Column header="إسم الزبون" field='orderBy.name' />
                    <Column header="رقم هاتف الزبون" field='orderBy.phone' />
                    <Column header="من مدينة" field='fromCity.name' />
                    <Column header="إلى مدينة" field='toCity.name' />
                    <Column header="تاريخ النقل" body={(rowData) => moment(rowData.date).format("dddd, MMMM Do YYYY, h:mm:ss a")} />
                    <Column header="وقت الإنشاء" body={(rowData) => moment(rowData.createdAt).fromNow()} />
                    <Column header="ملاحظات إضافية" field="notes" />
                </DataTable>
            </div>
        </Layout>
    )
}