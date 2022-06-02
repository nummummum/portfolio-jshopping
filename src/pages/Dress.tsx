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

let productArr: FilterProduct = loadList('DRESS');
let filterArr: FilterProduct = filterList(productArr, '');

export default function Dress() {
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
        filterArr = filterList(productArr, '');
        btn1.current.className = 'btn reverse';
        btn2.current.className = 'btn';
        btn3.current.className = 'btn';
        btn4.current.className = 'btn';
        btn5.current.className = 'btn';
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
        <h4 className="menu_title">드레스</h4>
        <ul className="btn_wrap">
          <li
            onClick={e => {
              click(1);
            }}
          >
            <Link to="/dress" state={{ kindnumber: 1 }}>
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
            <Link to="/dress" state={{ kindnumber: 2 }}>
              <div ref={btn2} className="btn">
                원피스
              </div>
            </Link>
          </li>
          <li
            onClick={e => {
              click(3);
            }}
          >
            <Link to="/dress" state={{ kindnumber: 3 }}>
              <div ref={btn3} className="btn">
                투피스&점프슈트
              </div>
            </Link>
          </li>
          <li
            onClick={e => {
              click(4);
            }}
          >
            <Link to="/dress" state={{ kindnumber: 4 }}>
              <div ref={btn4} className="btn">
                점퍼
              </div>
            </Link>
          </li>
          <li
            onClick={e => {
              click(5);
            }}
          >
            <Link to="/dress" state={{ kindnumber: 5 }}>
              <div ref={btn5} className="btn">
                베스트
              </div>
            </Link>
          </li>
        </ul>
        <div className="itemlist_wrap">
          {filterArr.itemlist.map((product, index) => (
            <ProductMenu
              key={index}
              id={product.id}
              thumb={'dress/' + product.thumb}
              color={product.color}
              title={product.title}
              size={product.size}
              price={product.price}
              url="dress"
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
