import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import ImgComponent from '../../components/common/ImgComponent';
import Footer from '../../components/layout/Footer';
import TotallCts from '../../components/common/TotallCts';
import ButtonWith from '../../components/common/ButtonWith';
import Button from '../../components/common/Button';
import Product from '../../components/common/Product';
import Modal from '../../components/common/modal';


const ProductDetail = () =>{

    const navigator = useNavigate();

    //exit modal
    const [exitPop, setExitPop] = useState(false);
    const openExit = () => {
        setExitPop(true);
    }
    const closeExit = () => {
        setExitPop(false);
    }

    //buy button
    const [ buyButton, setBuyButton ] = useState(true);

    //totallCts
    const [ totallCts, setTotallCts ] = useState(2000);

    //count
    const [ count, setCount ] = useState(1);
    const [ countResult, setCountResult] = useState(500);
    const plus = () => {
        setCount(count + 1);
        setCountResult(countResult + 500);

        if(countResult + 500 > totallCts){
            setBuyButton(false);
        }
    }
    const minus = () => {
        if(count > 1){
            setCount(count - 1);
            setCountResult(countResult - 500);
        }

        if(countResult - 500 <= totallCts){
            setBuyButton(true);
        } else {
            setBuyButton(false);
        }
    }

    //collect modal
    const [collectPop, setCollectPop] = useState(false);
    const openCollect = () => {
        setCollectPop(true);
    }
    const closeCollect = () => {
        setCollectPop(false);
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
                <article className='detail_contents'>
                    <div className='product_conts'>
                        <div className='product_img'>
                            <ImgComponent src={'img_product_1.png'} />
                        </div>
                        <div className='product_box'>
                            <div className='product_details'>
                                <Product brand={'Brand'} productName={'Product name'} price={'500'} unit={'CTs'} />
                            </div>
                            <div className='count_line'>
                                <div className='control_line'>
                                    <button className="btn_icon minus" type="button" onClick={minus}>
                                        <ImgComponent src={'minus_fff_12.svg'} />
                                    </button>
                                    <div className="num_box">
                                        <p>{count}</p>
                                    </div>
                                    <button className="btn_icon plus" type="button" onClick={plus}>
                                        <ImgComponent src={'plus_fff_12.svg'} />
                                    </button>
                                </div>
                                <div className='cost_box'>
                                    <p className='cost'>{countResult}</p>
                                    <span className='unit'>CTs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='detail_conts'>
                        <h3 className='detail_title'>Product Detail</h3>
                        <div className='product_img_add'>
                            <ImgComponent src={'img_product_2.jpg'} />
                        </div>
                        <div className='product_img_add'>
                            <ImgComponent src={'img_product_2.jpg'} />
                        </div>
                        <div className='product_img_add'>
                            <ImgComponent src={'img_product_2.jpg'} />
                        </div>
                        <div className='detail_txt'>
                            <p>제품설명 입니다. 제품설명 입니다. 제품설명 입니다. 제품설명 입니다. 제품설명 입니다. 제품설명 입니다. 제품설명 입니다. 제품설명 입니다. </p>
                        </div>
                    </div>
                </article>
                <Footer className={'footer'}>
                    <div className='footer_trans'>
                        {
                            buyButton ? 
                            <Button type={'button'} className={'btn_l btn_box primary one_full'} txt={'Buy Now'} onClick={()=>navigator('/productdetailoption')}/>
                            : <Button type={'button'} className={'btn_l btn_box primary one_full disabled'} txt={'Buy Now'} onClick={openCollect}/>
                        }
                    </div>
                    <div className='footer_cts'>
                        <h2>CarbonTree</h2>
                        <TotallCts className={'totall_cts'} result={totallCts} unit={'Cts'} />
                    </div>
                </Footer>
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
            {/* collect modal */}
            <Modal open={collectPop} close={closeCollect}>
                <div className='modal_cont'>
                    <h5 className='modal_title'>Insufficient CTs!</h5>
                    <p className='modal_txt'>Collect some more CTs.</p>
                </div>
                <div className='moal_foot'>
                    <Button type={'button'} className={'btn_l btn_box primary one_full'} txt={'Close'} onClick={closeCollect} />
                </div>
            </Modal>
        </div>
    )

}

export default ProductDetail;
