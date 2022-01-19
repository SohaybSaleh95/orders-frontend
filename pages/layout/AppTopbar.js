import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

const AppTopbar = (props) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const userData = localStorage.getItem("user")
        if (!userData) {
            window.location.href = '/login'
            return
        }

        setUser(JSON.parse(userData))
    }, [])

    const onTopbarItemClick = (event, item) => {
        if (props.onTopbarItemClick) {
            props.onTopbarItemClick({
                originalEvent: event,
                item: item
            });
        }
    }

    const logout = () => {
        localStorage.clear();
        window.location.href = "/login"
    }

    return (
        <div className="layout-topbar">
            <button type="button" className="p-link layout-menu-button layout-topbar-icon" onClick={props.onMenuButtonClick}>
                <i className="pi pi-bars"></i>
            </button>

            <button type="button" className="p-link layout-topbar-logo" onClick={() => window.location.href = '/'}>
                <img id="topbar-logo" src="/assets/layout/images/logo.svg" alt="roma-react" />
            </button>

            <ul className="topbar-menu">
                <li className={classNames('user-profile', { 'active-topmenuitem fadeInDown': props.activeTopbarItem === 'profile' })}>
                    {!props.inlineUser && <button type="button" className="p-link" onClick={(e) => onTopbarItemClick(e, 'profile')}>
                        <img src="/assets/layout/images/avatar.png" alt="roma-layout" />
                        <div className="layout-profile-userinfo">
                            <span className="layout-profile-name">
                                {user.name}
                            </span>
                            <span className="layout-profile-role">
                                {user.type == "Admin" ? "أدمن" :
                                    user.type == "Customer" ? "مرسل" :
                                        "وسيلة نقل"}
                            </span>
                        </div>
                    </button>}

                    <ul className="fadeInDown">
                        <li role="menuitem">
                            <button type="button" className="p-link" onClick={() => window.location.href = `/${user.type}/personal`}>
                                <i className="pi pi-fw pi-user"></i>
                                <span>
                                    المعلومات الشخصية
                                </span>
                            </button>
                        </li>
                        <li role="menuitem">
                            <button type="button" className="p-link" onClick={() => logout()}>
                                <i className="pi pi-fw pi-sign-out"></i>
                                <span>
                                    تسجيل الخروج
                                </span>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default AppTopbar;