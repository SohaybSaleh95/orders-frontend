import moment from 'moment'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { deleteOrder, getOrders, updateStatus } from '../../services/orders'
import Layout from '../layout'
import { confirmDialog } from 'primereact/confirmdialog'

export default function Orders() {
    const statusOptions = [
        {
            label: 'جديد',
            value: 'NEW'
        },
        {
            label: 'مع المرسل',
            value: 'WITH_SENDER'
        },
        {
            label: 'مع السائق',
            value: 'WITH_DRIVER'
        },
        {
            label: 'تم التوصيل',
            value: 'DELIVERED'
        }
    ]
    const [services, setServices] = useState([])

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
        updateStatus(service._id, e.value)
            .then(() => {
                toast.success("تم تعديل الحالة بنجاح!")
            }).catch((error) => {
                toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
            })
    }

    const onDeleteClicked = (service) => {
        confirmDialog({
            message: 'هل أنت متأكد انك تريد حذف الطلب؟',
            header: 'تأكيد الحذف',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                deleteOrder(service._id)
                    .then(() => {
                        toast.success('تم حذف الطلب بنجاح')
                        loadServices()
                    }).catch((error) => {
                        toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
                    })
            },
            reject: () => { },
            acceptLabel: 'نعم',
            rejectLabel: 'لا'
        });
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
                    الطلبات
                </h5>
                <DataTable value={services}>
                    <Column header="نوع الخدمة" body={getOrderType} />
                    <Column header="إسم الزبون" field="orderBy.name" />
                    <Column header="رقم الزبون" field="orderBy.phone" />
                    <Column header="إسم السائق" field="transportBy.name" />
                    <Column header="رقم السائق" field="transportBy.phone" />
                    <Column header="من مدينة" field="fromCity.name" />
                    <Column header="إلى مدينة" field="toCity.name" />
                    <Column header="تاريخ النقل" body={(service) => moment(service.date).format("dddd, MMMM Do YYYY, h:mm:ss a")} />
                    <Column header="وقت الإنشاء" body={(service) => moment(service.createdAt).fromNow()} />
                    <Column header="ملاحظات إضافية" field="notes" />
                    <Column header="الحالة" body={(service) => {
                        return (
                            <Dropdown options={statusOptions} value={service.status}
                                onChange={(e) => statusChange(service, e)} />
                        )
                    }} />
                    <Column header="" headerStyle={{ width: 50 }} body={(service) => {
                        return (<Button icon="fa fa-trash" className="p-button-danger"
                            onClick={() => onDeleteClicked(service)} />)
                    }} />
                </DataTable>
            </div>
        </Layout>
    )
}