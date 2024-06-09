import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../components/layout/Header';
import ButtonWith from '../../components/common/ButtonWith';
import ImgComponent from '../../components/common/ImgComponent';
import Footer from '../../components/layout/Footer';
import TotallCts from '../../components/common/TotallCts';
import data1 from './data1';
import data2 from './data2.json';
import List from '../../components/common/List';


const ProductList1 = () =>{

    const [products, setProducts] = useState(data1);
    const [copyStatus, setCopyStatus] = useState(true);

    useEffect(()=>{
        console.log(products);
    }, [products]);

    return(
        <div className='wrap'>
            <div className='contents'>
                <Header className={'header'}>
                    <h1 className='header_title'>CTreemall</h1>
                    <ButtonWith className={'btn_close'}>
                        <ImgComponent src={'close_line_fff_16.svg'} />
                    </ButtonWith>
                </Header>
                <article className='product_list'>
                    <ul>
                        {products.map((a, i)=>{
                            return(
                                <List key={i} product={products[i]} i={i + 1} />
                            )
                        })}
                    </ul>
                    <div className={copyStatus? 'copy_zone' : 'hide'}>
                        <button type='button' className='btn_m btn_box primary' onClick={()=>{
                            let copy = [...products, ...data2];
                            setProducts(copy);
                            setCopyStatus(false);
                        }}>
                            더보기
                        </button>
                    </div>
                </article>
                <Footer className={'footer'}>
                    <div className='footer_cts'>
                        <h2>CarbonTree</h2>
                        <TotallCts className={'totall_cts'} result={'1,234'} unit={'Cts'} />
                    </div>
                </Footer>
            </div>
        </div>
    )
}

export default ProductList1;
