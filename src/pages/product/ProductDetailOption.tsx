import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import ImgComponent from '../../components/common/ImgComponent';
import Footer from '../../components/layout/Footer';
import ButtonWith from '../../components/common/ButtonWith';
import Button from '../../components/common/Button';
import InputZone from '../../components/common/InputZone';
import Product from '../../components/common/Product';
import Modal from '../../components/common/modal';


const ProductDetailOption = () =>{

    const navigator = useNavigate();

    //exit modal
    const [exitPop, setExitPop] = useState(false);
    const openExit = () => {
        setExitPop(true);
    }
    const closeExit = () => {
        setExitPop(false);
    }

    return(
        <div className='wrap'>
            <div className='contents'>
                <Header className={'header'}>
                    <ButtonWith className={'btn_back'} onClick={()=>navigator(-1)}>
                        <ImgComponent src={'go_back_20.svg'} />
                    </ButtonWith>
                    <h1 className='header_title'>CTreemall</h1>
                    <ButtonWith className={'btn_close'} onClick={openExit}>
                        <ImgComponent src={'close_line_fff_16.svg'} />
                    </ButtonWith>
                </Header>
                <form>
                <article className='buynow_detail'>
                    <div className='order_summary'>
                        <h3 className='sub_title'>Order summary</h3>
                        <div className='summary_box'>
                            <div className='summary_img'>
                                <ImgComponent src={'img_thumb_1.png'} />
                            </div>
                            <div className='summary_details'>
                                <Product brand={'Brand'} productName={'Product name'} price={'500'} unit={'CTs'} />
                            </div>
                        </div>
                    </div>
                    <div className='delivery_box'>
                        <h3 className='sub_title sec'>Delivery option</h3>
                        <div>
                            <p className='label_text'>Full name</p>
                            <InputZone zoneClass={'input_box margin_16'} type={'text'} inputClass={'input_bar large'} placeholder={'Placeholder'} />
                            <p className='label_text'>Phone</p>
                            <InputZone zoneClass={'input_box margin_16'} type={'phone'} inputClass={'input_bar large'} placeholder={'Placeholder'} />
                            <p className='label_text'>Address</p>
                            <InputZone zoneClass={'input_box margin_16'} type={'text'} inputClass={'input_bar large'} placeholder={'Placeholder'} />
                            <p className='label_text'>Memo</p>
                            <InputZone zoneClass={'input_box margin_16'} type={'text'} inputClass={'input_bar large'} placeholder={'Placeholder'} />
                            <p className='option_bott'>Please enter the color, size, and any other options needed for the product. ex) orange XL</p>
                        </div>
                    </div>
                </article>
                <Footer className={'footer'}>
                    <div className='footer_trans two_btn'>
                        <Button type={'button'} className={'btn_two btn_box primary cancel one_full'} txt={'Cancel'} />
                        <Button type={'button'} className={'btn_two btn_box primary one_full'} txt={'Place order'} />
                    </div>
                </Footer>
                </form>
            </div>

            {/* exit modal */}
            <Modal open={exitPop} close={closeExit}>
                <div className='modal_cont'>
                    <h5 className='modal_title'>CTreemall exit</h5>
                    <p className='modal_txt'>Are you sure you want to exit CTmall?</p>
                </div>
                <div className='moal_foot'>
                    <Button type={'button'} className={'btn_m btn_box cancel one_full'} txt={'Keep shopping'} onClick={closeExit} />
                    <Button type={'button'} className={'btn_m btn_box primary one_full'} txt={'Exit'} />
                </div>
            </Modal>
        </div>
    )

}

export default ProductDetailOption;
