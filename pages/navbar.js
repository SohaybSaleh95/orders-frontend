import React from 'react'
import { useEffect, useState } from "react";

export default function NavBar() {
    const [loggedInUser, setLoggedInUser] = useState({})
    const [actions, setActions] = useState([])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        setLoggedInUser(user)
        setActions(getActions(user))
    }, [])

    const logout = () => {
        localStorage.clear();
    }

    const getActions = (user) => {
        switch (user.type) {
            case 'Admin':
                return [
                    {
                        path: '/Admin/personal',
                        title: 'المعلومات الشخصية'
                    },
                    {
                        path: '/Admin/cities',
                        title: 'المدن'
                    },
                    {
                        path: '/Admin/drivers',
                        title: 'السائقين'
                    },
                    {
                        path: '/Admin/orders',
                        title: 'الطلبات'
                    }
                ]
            case 'Customer':
                return [
                    {
                        path: '/Customer/personal',
                        title: 'المعلومات الشخصية'
                    },
                    {
                        path: '/Customer/service-request',
                        title: 'طلب خدمة'
                    },
                    {
                        path: '/Customer/services',
                        title: 'طلبات سابقة'
                    }
                ]
            default:
                return [
                    {
                        path: '/Transport/personal',
                        title: 'المعلومات الشخصية'
                    },
                    {
                        path: '/Transport/providing-service',
                        title: 'تقديم خدمة'
                    },
                    {
                        path: '/Transport/orders',
                        title: 'الخدمات السابقة'
                    }
                ]
        }
    }

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" dir="rtl">
            <div className="d-flex justify-content-between full-width">
                <ul className="navbar-nav">
                    {
                        actions.map((action) => {
                            return (
                                <li className="nav-item" key={action.path}>
                                    <a className="nav-link" href={action.path}>
                                        {action.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item" >
                        <a className="nav-link" href="javascript:void(0)">
                            <span>
                                {loggedInUser.name}
                            </span>
                            <span className="badge bg-primary mr-5">
                                {loggedInUser.type == "Admin" ? "أدمن" :
                                    loggedInUser.type == "Customer" ? "مرسل" :
                                        "وسيلة نقل"}
                            </span>
                        </a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" onChange={logout} href="/login">تسجيل خروج</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}