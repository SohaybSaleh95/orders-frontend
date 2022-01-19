import moment from 'moment'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Rating } from 'primereact/rating'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getOrders, updateRating } from '../../services/orders'
import Layout from '../layout'

export default function Services() {
    const [services, setServices] = useState([])

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

    const getOrderType = (rowData) => {
        switch (rowData.orderType) {
            case 'PEOPLE':
                return 'نقل أشخاص (' + rowData.passengers + ')';
            default:
                return 'نقل طرد';
        }
    }

    const ratingBtn = (rowData) => {
        return (
            <Rating stars={5} value={rowData.rating} onChange={(e) => onRatingChanged(rowData, e.value)} />
        )
    }

    const onRatingChanged = (service, newRating) => {
        updateRating(service._id, newRating)
            .then(() => {
                loadServices()
                toast.success("تم تعديل التقييم بنجاح!")
            }).catch((error) => {
                console.log(error)
                toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
            })
    }

    return (
        <Layout>
            <div className="card p-fluid">
                <h5>
                    الطلبات
                </h5>
                <DataTable value={services}>
                    <Column header="نوع الخدمة" body={getOrderType} />
                    <Column header="إسم السائق" field='transportBy.name' />
                    <Column header="رقم هاتف" field='transportBy.phone' />
                    <Column header="من مدينة" field='fromCity.name' />
                    <Column header="إلى مدينة" field='toCity.name' />
                    <Column header="تاريخ النقل" body={(rowData) => moment(rowData.date).format("dddd, MMMM Do YYYY, h:mm:ss a")} />
                    <Column header="وقت الإنشاء" body={(rowData) => moment(rowData.createdAt).fromNow()} />
                    <Column header="ملاحظات إضافية" field="notes" />
                    <Column header="التقييم" body={ratingBtn} />
                </DataTable>
            </div>
        </Layout>
    )
}