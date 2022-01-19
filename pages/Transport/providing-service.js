import { Dropdown } from "primereact/dropdown";
import moment from "moment";
import { useRouter } from "next/router";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getCities } from "../../services/cities";
import { createOrder, getOrders, updateOrder } from "../../services/orders";
import Layout from "../layout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";

export default function ServiceRequest() {
    const router = useRouter()
    const orderTypes = [
        {
            label: 'نقل أشخاص',
            value: 'PEOPLE'
        },
        {
            label: 'نقل طرد',
            value: 'PACKAGE'
        }
    ]
    const [form, setForm] = useState({})
    const [cities, setCities] = useState([])
    const [orders, setOrders] = useState([])
    const [selectedOrder, setSelectedOrder] = useState(null)

    useEffect(() => {
        loadCities()
    }, [])

    useEffect(() => {
        loadOrders()
    }, [form])

    const loadCities = () => {
        getCities().then((res) => {
            setCities(res.data)
        }).catch(() => { })
    }

    const infoChange = (e) => {
        let { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const loadOrders = () => {
        getOrders({
            ...form,
            type: 'service'
        })
            .then((res) => {
                setOrders(res.data)
                setSelectedOrder(null)
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

    const submitForm = () => {
        if (!selectedOrder) {
            if (!form.orderType || !form.fromCity || !form.toCity || !form.date) {
                toast.error("يجب ملئ جميع الحقول الاجبارية")
                return;
            }
            if (form.orderType == 'PEOPLE') {
                if (!form.passengers || form.passengers < 1) {
                    toast.error("عدد الركاب يجب ان يكون اكبر من ١")
                    return;
                }
            }
        }

        if (selectedOrder) {
            form.order = selectedOrder
        }
        const request = {
            ...selectedOrder,
            ...form
        }
        if (selectedOrder) {
            updateOrder(selectedOrder._id, request)
                .then(() => {
                    toast.success("تم إضافة الطلب بنجاح!")
                    router.push('/Transport/orders')
                }).catch((error) => {
                    toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
                })
        } else {
            createOrder(form).then(() => {
                toast.success("تم إضافة الطلب بنجاح!")
                router.push('/Transport/orders')
            }).catch((error) => {
                toast.error(error?.response?.data?.errorMessage || 'حدث خطأ في العملية')
            })
        }
    }

    return (
        <Layout>
            <div className="card p-fluid">
                <h5>
                    تقديم خدمة
                </h5>
                <div className="p-formgrid p-grid">
                    <div className="p-field p-col-6">
                        <label htmlFor="orderType">نوع الخدمة</label>
                        <Dropdown value={form.orderType} options={orderTypes}
                            id="orderType" name="orderType" onChange={infoChange} />
                    </div>
                    <div className="p-field p-col-6">
                        {
                            form.orderType === 'PEOPLE' &&
                            <>
                                <label htmlFor="passengers">عدد الأشخاص</label>
                                <InputText id="passengers" name="passengers" type="number" min={1}
                                    value={form.passengers} onChange={infoChange} />
                            </>
                        }
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="name2">
                            من مدينة
                        </label>
                        <Dropdown value={form.fromCity} options={cities}
                            id="fromCity" name="fromCity" onChange={infoChange} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="name2">
                            إلى مدينة
                        </label>
                        <Dropdown value={form.toCity} options={cities}
                            id="toCity" name="toCity" onChange={infoChange} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="name2">
                            تاريخ المغادرة
                        </label>
                        <Calendar showTime showIcon={true}
                            id="date" name="date" minDate={new Date()}
                            onChange={infoChange} />
                    </div>
                </div>
            </div>
            <div className="card p-fluid">
                <h5>
                    الطلبات المتوفرة
                </h5>
                <DataTable value={orders} selection={selectedOrder}
                    onSelectionChange={e => setSelectedOrder(e.value)} dataKey="_id">
                    <Column selectionMode="single" headerStyle={{ width: '3em' }}></Column>
                    <Column body={getOrderType} header="نوع الخدمة"></Column>
                    <Column body={(rowData) => moment(rowData.date).format("dddd, MMMM Do YYYY, h:mm:ss a")} header="تاريخ الخدمة"></Column>
                    <Column field="fromCity.name" header="من مدينة"></Column>
                    <Column field="toCity.name" header="إلى مدينة"></Column>
                    <Column field="orderBy.name" header="الإسم"></Column>
                    <Column field="orderBy.phone" header="رقم الهاتف"></Column>
                    <Column field="passengers" header="عدد الركاب"></Column>
                    <Column field="notes" header="ملاحظات"></Column>
                </DataTable>
            </div>
            <Toolbar left={<Button icon="fa fa-save" label="تقديم الخدمة"
                onClick={submitForm} />} />
        </Layout>
    )
}