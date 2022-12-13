import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import Header from "../components/Header";
import "./Home.scss";
import "../common/listcommon.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FilterProduct } from "../types/type";
import loadList from "../function/loadList";
import ProductMenu from "../components/ProductMenu";
import { Link } from "react-router-dom";
SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가

let productOuterArr: FilterProduct = loadList("OUTER");
let productTopArr: FilterProduct = loadList("TOP");
let productKnitArr: FilterProduct = loadList("KNIT");
let productBottomArr: FilterProduct = loadList("BOTTOM");
let productDressArr: FilterProduct = loadList("DRESS");
let productAccessArr: FilterProduct = loadList("ACCESS");
let productShoesbagArr: FilterProduct = loadList("SHOESBAG");
export default function Home() {
  return (
    <>
      <section className="home_main">
        <Swiper
          className="swiper"
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "progressbar",
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            // false : 스와이프 후 자동재생
          }}
          scrollbar={{ draggable: true }}
          loop={true}
          // onSlideChange={() => console.log('change')}
        >
          <SwiperSlide className="swiper-slide">
            <Link to="/descreact">
              <img src="/images/banner_top_img1.jpg" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Link to="/deschome">
              <img src="/images/banner_top_img2.jpg" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Link to="/descts">
              <img src="/images/banner_top_img3.jpg" alt="" />
            </Link>
          </SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </section>
      <section className="itemlist">
        <h4 className="menu_title">아우터</h4>
        <div className="itemlist_wrap">
          {productOuterArr.itemlist.map((product, index) => (
            <ProductMenu
              key={index}
              id={product.id}
              thumb={"outer/" + product.thumb}
              color={product.color}
              title={product.title}
              price={product.price}
              size={product.size}
              url="outer"
            />
          ))}
        </div>
        <h4 className="menu_title">탑</h4>
        <div className="itemlist_wrap">
          {productTopArr.itemlist.map((product, index) => (
            <ProductMenu
              key={index}
              id={product.id}
              thumb={"top/" + product.thumb}
              color={product.color}
              title={product.title}
              price={product.price}
              size={product.size}
              url="top"
            />
          ))}
        </div>
        <h4 className="menu_title">니트</h4>
        <div className="itemlist_wrap">
          {productKnitArr.itemlist.map((product, index) => (
            <ProductMenu
              key={index}
              id={product.id}
              thumb={"knit/" + product.thumb}
              color={product.color}
              title={product.title}
              price={product.price}
              size={product.size}
              url="knit"
            />
          ))}
        </div>
        <h4 className="menu_title">바텀</h4>
        <div className="itemlist_wrap">
          {productBottomArr.itemlist.map((product, index) => (
            <ProductMenu
              key={index}
              id={product.id}
              thumb={"bottom/" + product.thumb}
              color={product.color}
              title={product.title}
              price={product.price}
              size={product.size}
              url="bottom"
            />
          ))}
        </div>
        <h4 className="menu_title">드레스</h4>
        <div className="itemlist_wrap">
          {productDressArr.itemlist.map((product, index) => (
            <ProductMenu
              key={index}
              id={product.id}
              thumb={"dress/" + product.thumb}
              color={product.color}
              title={product.title}
              price={product.price}
              size={product.size}
              url="dress"
            />
          ))}
        </div>
        <h4 className="menu_title">악세사리</h4>
        <div className="itemlist_wrap">
          {productAccessArr.itemlist.map((product, index) => (
            <ProductMenu
              key={index}
              id={product.id}
              thumb={"access/" + product.thumb}
              color={product.color}
              title={product.title}
              price={product.price}
              size={product.size}
              url="access"
            />
          ))}
        </div>
        <h4 className="menu_title">슈즈&백</h4>
        <div className="itemlist_wrap">
          {productShoesbagArr.itemlist.map((product, index) => (
            <ProductMenu
              key={index}
              id={product.id}
              thumb={"shoesbag/" + product.thumb}
              color={product.color}
              title={product.title}
              price={product.price}
              size={product.size}
              url="shoesbag"
            />
          ))}
        </div>
      </section>
    </>
  );
}
