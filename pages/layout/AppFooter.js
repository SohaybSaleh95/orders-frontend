import React from 'react';

const AppFooter = () => {

    return (
        <div className="layout-footer">
            <div>
                <img src="/assets/layout/images/logo-black.svg" alt="roma-layout" />
                <p>
                    موقع عالطريق للخدمات اللوجستية
                </p>
            </div>
            <div className="footer-icons">
                <button type="button" className="p-link">
                    <i className="pi pi-home"></i>
                </button>
            </div>
        </div>
    )
}

export default AppFooter;