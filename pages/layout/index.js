import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppMenu from './AppMenu';

import PrimeReact from 'primereact/api';

const Layout = ({ children }) => {
    const [menu, setMenu] = useState([])
    const [layoutMode, setLayoutMode] = useState('static');
    const [lightMenu, setLightMenu] = useState(false);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [staticMenuMobileActive, setStaticMenuMobileActive] = useState(false);
    const [staticMenuDesktopInactive, setStaticMenuDesktopInactive] = useState(false);
    const [isRTL, setIsRTL] = useState(true);
    const [inlineUser, setInlineUser] = useState(false);
    const [topbarMenuActive, setTopbarMenuActive] = useState(false);
    const [activeTopbarItem, setActiveTopbarItem] = useState(null);
    const [inlineUserMenuActive, setInlineUserMenuActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [topbarColor, setTopbarColor] = useState('layout-topbar-dark');
    const [theme, setTheme] = useState('blue');
    const [configActive, setConfigActive] = useState(false);
    const [inputStyle, setInputStyle] = useState('filled');
    const [ripple, setRipple] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        switch (user.type) {
            case 'Admin':
                setMenu([
                    {
                        label: '', icon: 'pi pi-fw pi-home', to: '/',
                        items: [
                            {
                                to: '/Admin/cities',
                                icon: 'fa fa-home',
                                label: 'المدن'
                            },
                            {
                                to: '/Admin/drivers',
                                icon: 'fa fa-car',
                                label: 'السائقين'
                            },
                            {
                                to: '/Admin/orders',
                                icon: 'fa fa-box',
                                label: 'الطلبات'
                            }
                        ]
                    }
                ])
                return
            case 'Customer':
                setMenu([
                    {
                        label: '', icon: 'pi pi-fw pi-home', to: '/',
                        items: [
                            {
                                label: 'طلب جديد',
                                icon: 'pi pi-fw pi-plus',
                                to: '/Customer/service-request'
                            },
                            {
                                label: 'الطلبات',
                                icon: 'pi pi-fw pi-list',
                                to: '/Customer/services'
                            }
                        ]
                    }
                ])
                return
            case 'Transport':
                setMenu([
                    {
                        label: '', icon: 'pi pi-fw pi-home', to: '/',
                        items: [
                            {
                                to: '/Transport/providing-service',
                                icon: 'pi pi-fw pi-plus',
                                label: 'تقديم خدمة'
                            },
                            {
                                to: '/Transport/orders',
                                icon: 'pi pi-fw pi-list',
                                label: 'الخدمات السابقة'
                            }
                        ]
                    }
                ])
        }
    }, [])


    let topbarItemClick;
    let menuClick;
    let rightMenuClick;
    let userMenuClick;
    let configClick = false;

    useEffect(() => {
        if (staticMenuMobileActive) {
            blockBodyScroll();
        }
        else {
            unblockBodyScroll();
        }
    }, [staticMenuMobileActive]);

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    };

    const onRippleChange = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    };

    const onDocumentClick = () => {
        if (!topbarItemClick) {
            setActiveTopbarItem(null);
            setTopbarMenuActive(false);
        }

        if (!userMenuClick && isSlim() && !isMobile()) {
            setInlineUserMenuActive(false);
        }

        if (!menuClick) {
            if (isHorizontal() || isSlim()) {
                setMenuActive(false);
            }

            if (overlayMenuActive || staticMenuMobileActive) {
                hideOverlayMenu();
            }

            unblockBodyScroll();
        }

        if (configActive && !configClick) {
            setConfigActive(false);
        }

        topbarItemClick = false;
        menuClick = false;
        rightMenuClick = false;
        userMenuClick = false;
        configClick = false;
    };

    const onMenuButtonClick = (event) => {
        menuClick = true;
        setTopbarMenuActive(false);

        if (layoutMode === 'overlay') {
            setOverlayMenuActive(prevOverlayMenuActive => !prevOverlayMenuActive);
        }

        if (isDesktop())
            setStaticMenuDesktopInactive(prevStaticMenuDesktopInactive => !prevStaticMenuDesktopInactive);
        else {
            setStaticMenuMobileActive(prevStaticMenuMobileActive => !prevStaticMenuMobileActive);
            if (staticMenuMobileActive) {
                blockBodyScroll();
            } else {
                unblockBodyScroll();
            }
        }

        event.preventDefault();
    };

    const onTopbarMenuButtonClick = (event) => {
        topbarItemClick = true;
        setTopbarMenuActive(prevTopbarMenuActive => !prevTopbarMenuActive);
        hideOverlayMenu();
        event.preventDefault();
    };

    const onTopbarItemClick = (event) => {
        topbarItemClick = true;

        if (activeTopbarItem === event.item)
            setActiveTopbarItem(null);
        else
            setActiveTopbarItem(event.item);

        event.originalEvent.preventDefault();
    };

    const onMenuClick = () => {
        menuClick = true;
    };

    const onInlineUserClick = () => {
        userMenuClick = true;
        setInlineUserMenuActive(prevInlineUserMenuActive => !prevInlineUserMenuActive);
        setMenuActive(false);
    };

    const blockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        }
        else {
            document.body.className += ' blocked-scroll';
        }
    };

    const unblockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        }
        else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };

    const onRightMenuButtonClick = (event) => {
        rightMenuClick = true;
        setRightPanelMenuActive(prevRightPanelMenuActive => !prevRightPanelMenuActive);

        hideOverlayMenu();

        event.preventDefault();
    };

    const hideOverlayMenu = () => {
        setOverlayMenuActive(false);
        setStaticMenuMobileActive(false);
    };

    const onMenuItemClick = (event) => {
        if (!event.item.items) {
            hideOverlayMenu();
        }
        if (!event.item.items && (isHorizontal() || isSlim())) {
            setMenuActive(false);
        }
    };

    const onRootMenuItemClick = () => {
        setMenuActive(prevMenuActive => !prevMenuActive);
        setInlineUserMenuActive(false);
    };

    const isDesktop = () => {
        return window.innerWidth > 896;
    };

    const isMobile = () => {
        return window.innerWidth <= 1025;
    };

    const isHorizontal = () => {
        return layoutMode === 'horizontal';
    };

    const isSlim = () => {
        return layoutMode === 'slim';
    };

    const onLayoutModeChange = (layoutMode) => {
        setLayoutMode(layoutMode);
        setStaticMenuDesktopInactive(false);
        setOverlayMenuActive(false);

        if (layoutMode === 'horizontal' && inlineUser) {
            setInlineUser(false)
        }

    };

    const onMenuColorChange = (menuColor) => {
        setLightMenu(menuColor);
    };

    const onThemeChange = (theme) => {
        setTheme(theme);
    };

    const onProfileModeChange = (profileMode) => {
        setInlineUser(profileMode);
    };

    const onOrientationChange = (orientation) => {
        setIsRTL(orientation);
    };

    const onTopbarColorChange = (color) => {
        setTopbarColor(color);
    };

    const layoutClassName = classNames('layout-wrapper', {
        'layout-horizontal': layoutMode === 'horizontal',
        'layout-overlay': layoutMode === 'overlay',
        'layout-static': layoutMode === 'static',
        'layout-slim': layoutMode === 'slim',
        'layout-menu-light': lightMenu,
        'layout-menu-dark': !lightMenu,
        'layout-overlay-active': overlayMenuActive,
        'layout-mobile-active': staticMenuMobileActive,
        'layout-static-inactive': staticMenuDesktopInactive,
        'layout-rtl': isRTL,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': !ripple
    }, topbarColor);

    const inlineUserTimeout = layoutMode === 'slim' ? 0 : { enter: 1000, exit: 450 };

    return (
        <div className={layoutClassName} onClick={onDocumentClick}>
            <AppTopbar topbarMenuActive={topbarMenuActive} activeTopbarItem={activeTopbarItem} inlineUser={inlineUser}
                onRightMenuButtonClick={onRightMenuButtonClick} onMenuButtonClick={onMenuButtonClick}
                onTopbarMenuButtonClick={onTopbarMenuButtonClick} onTopbarItemClick={onTopbarItemClick} />

            <div className="layout-menu-container" onClick={onMenuClick}>
                {
                    inlineUser && (
                        <div className="layout-profile">
                            <button type="button" className="p-link layout-profile-button" onClick={onInlineUserClick}>
                                <img src="assets/layout/images/avatar.png" alt="roma-layout" />
                                <div className="layout-profile-userinfo">
                                    <span className="layout-profile-name">Arlene Welch</span>
                                    <span className="layout-profile-role">Design Ops</span>
                                </div>
                            </button>
                            <CSSTransition classNames="p-toggleable-content" timeout={inlineUserTimeout} in={inlineUserMenuActive} unmountOnExit>
                                <ul className={classNames('layout-profile-menu', { 'profile-menu-active': inlineUserMenuActive })}>
                                    <li>
                                        <button type="button" className="p-link">
                                            <i className="pi pi-fw pi-user"></i><span>Profile</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="p-link">
                                            <i className="pi pi-fw pi-cog"></i><span>Settings</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="p-link">
                                            <i className="pi pi-fw pi-envelope"></i><span>Messages</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="p-link">
                                            <i className="pi pi-fw pi-bell"></i><span>Notifications</span>
                                        </button>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </div>
                    )
                }
                <AppMenu model={menu} onMenuItemClick={onMenuItemClick} onRootMenuItemClick={onRootMenuItemClick} layoutMode={layoutMode} active={menuActive} mobileMenuActive={staticMenuMobileActive} />
            </div>

            <div className="layout-main">
                <div className="layout-content">
                    {children}
                </div>
                <AppFooter />
            </div>

            <div className="layout-content-mask"></div>
        </div>
    );

}

export default Layout;
