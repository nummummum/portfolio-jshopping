import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetail.scss';
export default function ProductDetail() {
  const location = useLocation();
  const state = location.state as {
    id: string;
    img: string;
    color: string[];
    title: string;
    price: string;
    size: string[];
  };
  return (
    <>
      <div className="product_wrap">
        <img src={state.img} alt="" />
        <div className="text_wrap">
          <div className="title_wrap">
            <h4 className="title">{state.title}</h4>
            <h5 className="price">{state.price}원</h5>
          </div>
          <div className="discount_wrap">
            <div className="product_code">
              <h4 className="code">제품코드</h4>
              <div className="code_detail">{state.id}</div>
            </div>
          </div>
          <div className="select_wrap">
            <div className="select_color">
              <h4 className="text_color">색상</h4>
              <select className="color">
                <option value="val0">--옵션선택--</option>
                {state.color.map((color, index) => {
                  return (
                    <option key={index} value={index}>
                      {color}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="select_size">
              <h4 className="text_size">사이즈</h4>
              <select className="size">
                <option value="val0">--옵션선택--</option>
                {state.size.map((size, index) => {
                  return (
                    <option key={index} value={index}>
                      {size}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="buy_wrap">
            <div className="fav_icon"></div>
            <div className="basket">장바구니</div>
            <div className="buy_now">바로구매</div>
          </div>
        </div>
      </div>
    </>
  );
}
