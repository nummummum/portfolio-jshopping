import ProductBottom from "../components/ProductBottom";
import ProductMenu from "../components/ProductMenu";
import ProductTopBar from "../components/ProductTopBar";
import loadList from "../function/loadList";
import "../common/listcommon.scss";
import { useEffect, useRef, useState } from "react";
import filterList from "../function/filterList";
import { FilterProduct, ProductDetail } from "../types/type";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

let productArr: FilterProduct = loadList("KNIT");
let filterArr: FilterProduct = filterList(productArr, "");

export default function Knit() {
  const location = useLocation();
  const state = location.state as { kindnumber: number };
  let kindprops = state.kindnumber;
  const [props, setprops] = useState<number>(kindprops);
  const [kindNumber, setkindNumber] = useState<number>();
  const [booleanState, setBoolean] = useState<boolean>(false);
  const btn1 = useRef<HTMLDivElement>(null);
  const btn2 = useRef<HTMLDivElement>(null);
  const btn3 = useRef<HTMLDivElement>(null);
  const btn4 = useRef<HTMLDivElement>(null);
  const btn5 = useRef<HTMLDivElement>(null);
  //OUTER의 thumb 정보가 닮겨있음

  // console.log(productArr.itemlist);
  useEffect(() => {
    switch (kindNumber) {
      case 1: {
        filterArr = filterList(productArr, "");
        btn1.current.className = "btn reverse";
        btn2.current.className = "btn";
        btn3.current.className = "btn";
        btn4.current.className = "btn";
        // console.log(filterArr);
        break;
      }
      case 2: {
        filterArr = filterList(productArr, "KNI");
        btn2.current.className = "btn reverse";
        btn1.current.className = "btn";
        btn3.current.className = "btn";
        btn4.current.className = "btn";
        // console.log(filterArr);
        break;
      }
      case 3: {
        filterArr = filterList(productArr, "KGA");
        btn3.current.className = "btn reverse";
        btn1.current.className = "btn";
        btn2.current.className = "btn";
        btn4.current.className = "btn";
        // console.log(filterArr);
        break;
      }
      case 4: {
        filterArr = filterList(productArr, "TMI");
        btn4.current.className = "btn reverse";
        btn1.current.className = "btn";
        btn2.current.className = "btn";
        btn3.current.className = "btn";
        // console.log(filterArr);
        break;
      }
      default:
        filterArr = filterList(productArr, "");
        // console.log(filterArr);
        break;
    }
    setBoolean(false);
  }, [booleanState]);
  useEffect(() => {
    setprops(kindprops);
  }, [kindprops]);
  useEffect(() => {
    setkindNumber(props);
    setBoolean(true);
  }, [props]);
  return (
    <>
      <section className="itemlist">
        <ProductTopBar />
        <h4 className="menu_title">니트</h4>
        <ul className="btn_wrap">
          <li
            onClick={(e) => {
              click(1);
            }}
          >
            <Link to="/knit" state={{ kindnumber: 1 }}>
              <div ref={btn1} className="btn reverse">
                전체
              </div>
            </Link>
          </li>
          <li
            onClick={(e) => {
              click(2);
            }}
          >
            <Link to="/knit" state={{ kindnumber: 2 }}>
              <div ref={btn2} className="btn">
                니트
              </div>
            </Link>
          </li>
          <li
            onClick={(e) => {
              click(3);
            }}
          >
            <Link to="/knit" state={{ kindnumber: 3 }}>
              <div ref={btn3} className="btn">
                가디건
              </div>
            </Link>
          </li>
          <li
            onClick={(e) => {
              click(4);
            }}
          >
            <Link to="/knit" state={{ kindnumber: 4 }}>
              <div ref={btn4} className="btn">
                베스트&숄
              </div>
            </Link>
          </li>
        </ul>
        <div className="itemlist_wrap">
          {filterArr.itemlist.map((product, index) => (
            <ProductMenu
              key={index}
              id={product.id}
              thumb={"knit/" + product.thumb}
              color={product.color}
              title={product.title}
              size={product.size}
              price={product.price}
              url="knit"
            />
          ))}
        </div>
        <ProductBottom />
      </section>
    </>
  );

  function click(num: number) {
    setkindNumber(num);
    setBoolean(true);
  }
}
