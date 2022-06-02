import ProductBottom from '../components/ProductBottom';
import ProductMenu from '../components/ProductMenu';
import ProductTopBar from '../components/ProductTopBar';
import loadList from '../function/loadList';
import '../common/listcommon.scss';
import { useEffect, useRef, useState } from 'react';
import filterList from '../function/filterList';
import { FilterProduct, ProductDetail } from '../types/type';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

let productArr: FilterProduct = loadList('SHOESBAG');
let filterArr: FilterProduct = filterList(productArr, '');

export default function ShoesBag() {
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
  const btn6 = useRef<HTMLDivElement>(null);
  //OUTER의 thumb 정보가 닮겨있음

  // console.log(productArr.itemlist);
  useEffect(() => {
    switch (kindNumber) {
      case 1: {
        filterArr = filterList(productArr, '');
        btn1.current.className = 'btn reverse';
        btn2.current.className = 'btn';
        btn3.current.className = 'btn';
        btn4.current.className = 'btn';
        btn5.current.className = 'btn';
        btn6.current.className = 'btn';
        // console.log(filterArr);
        break;
      }
      case 2: {
        filterArr = filterList(productArr, 'TSH');
        btn2.current.className = 'btn reverse';
        btn1.current.className = 'btn';
        btn3.current.className = 'btn';
        btn4.current.className = 'btn';
        btn5.current.className = 'btn';
        btn6.current.className = 'btn';
        // console.log(filterArr);
        break;
      }
      case 3: {
        filterArr = filterList(productArr, 'TBL');
        btn3.current.className = 'btn reverse';
        btn1.current.className = 'btn';
        btn2.current.className = 'btn';
        btn4.current.className = 'btn';
        btn5.current.className = 'btn';
        btn6.current.className = 'btn';
        // console.log(filterArr);
        break;
      }
      case 4: {
        filterArr = filterList(productArr, 'TMI');
        btn4.current.className = 'btn reverse';
        btn1.current.className = 'btn';
        btn2.current.className = 'btn';
        btn3.current.className = 'btn';
        btn5.current.className = 'btn';
        btn6.current.className = 'btn';
        // console.log(filterArr);
        break;
      }
      case 5: {
        filterArr = filterList(productArr, 'TMI');
        btn5.current.className = 'btn reverse';
        btn1.current.className = 'btn';
        btn2.current.className = 'btn';
        btn3.current.className = 'btn';
        btn4.current.className = 'btn';
        btn6.current.className = 'btn';
        // console.log(filterArr);
        break;
      }
      case 6: {
        filterArr = filterList(productArr, 'TMI');
        btn6.current.className = 'btn reverse';
        btn1.current.className = 'btn';
        btn2.current.className = 'btn';
        btn3.current.className = 'btn';
        btn4.current.className = 'btn';
        btn5.current.className = 'btn';
        // console.log(filterArr);
        break;
      }
      default:
        filterArr = filterList(productArr, '');
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
        <h4 className="menu_title">슈즈&백</h4>
        <ul className="btn_wrap">
          <li
            onClick={e => {
              click(1);
            }}
          >
            <Link to="/shoesbag" state={{ kindnumber: 1 }}>
              <div ref={btn1} className="btn reverse">
                전체
              </div>
            </Link>
          </li>
          <li
            onClick={e => {
              click(2);
            }}
          >
            <Link to="/shoesbag" state={{ kindnumber: 2 }}>
              <div ref={btn2} className="btn">
                플랫
              </div>
            </Link>
          </li>
          <li
            onClick={e => {
              click(3);
            }}
          >
            <Link to="/shoesbag" state={{ kindnumber: 3 }}>
              <div ref={btn3} className="btn">
                로퍼&선로퍼
              </div>
            </Link>
          </li>
          <li
            onClick={e => {
              click(4);
            }}
          >
            <Link to="/shoesbag" state={{ kindnumber: 4 }}>
              <div ref={btn4} className="btn">
                힐&부츠
              </div>
            </Link>
          </li>
          <li
            onClick={e => {
              click(5);
            }}
          >
            <Link to="/shoesbag" state={{ kindnumber: 5 }}>
              <div ref={btn5} className="btn">
                가방
              </div>
            </Link>
          </li>
          <li
            onClick={e => {
              click(6);
            }}
          >
            <Link to="/shoesbag" state={{ kindnumber: 6 }}>
              <div ref={btn6} className="btn">
                파우치
              </div>
            </Link>
          </li>
        </ul>
        <div className="itemlist_wrap">
          {filterArr.itemlist.map((product, index) => (
            <ProductMenu
              key={index}
              id={product.id}
              thumb={'shoesbag/' + product.thumb}
              color={product.color}
              title={product.title}
              size={product.size}
              price={product.price}
              url="shoesbag"
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
