import React, { useEffect, useState } from 'react'
import { deleteCity, getCities } from '../../../services/cities';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Layout from '../../layout';
import { Toolbar } from 'primereact/toolbar'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { confirmDialog } from 'primereact/confirmdialog'

export default function Cities() {
    const [cities, setCities] = useState([])
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
        confirmDialog({
            message: `هل أنت متأكد انك تريد حذف المدينة (${city.name})؟`,
            header: 'تأكيد الحذف',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                deleteCity(city._id)
                    .then(() => {
                        toast.success('تم حذف المدينة بنجاح!')
                        loadCities()
                    }).catch((error) => {
                        toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
                    })
            },
            reject: () => { },
            acceptLabel: 'نعم',
            rejectLabel: 'لا'
        });
    }

    return (
        <Layout>
            <div className="card">
                <Toolbar left={<h3>المدن</h3>}
                    right={<Button icon="fa fa-plus" label="إضافة مدينة"
                        onClick={() => router.push('/Admin/cities/create')} />} />
                <DataTable value={cities}>
                    <Column header="الإسم" field="name" />
                    <Column header="فعال" body={(rowData) => rowData.enabled ? 'نعم' : 'لا'} />
                    <Column header="" body={(city) => {
                        return (
                            <>
                                <Button icon="fa fa-edit" onClick={() => router.push(`/Admin/cities/update?id=${city._id}`)} />
                                <Button icon="fa fa-trash" className='m-r-5 p-button-danger'
                                    onClick={() => onDeleteClicked(city)} />
                            </>
                        )
                    }} />
                </DataTable>
            </div>
        </Layout>
    )
}