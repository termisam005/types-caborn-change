import React, { Component } from 'react';


const Modal = ({ open, close, children }) => {

    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div className='modal_bg' onClick={close}></div>
            <div className='modal_wrap'>
                <div className='modal_body'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;

