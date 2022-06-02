import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  const [iconState, setIcon] = useState<string>('icon');
  const [menuState, setMenu] = useState<string>('menu');
  return (
    <>
      <header>
        <div className={iconState} onClick={click}>
          <span className="menuline" />
          <span className="menuline" />
          <span className="menuline" />
        </div>
        <div className="title">
          <a href="/">JShop</a>
        </div>
        <ul className="shop_menu">
          <li>
            <Link to="/outer" state={{ kindnumber: 1 }}>
              아우터
            </Link>
          </li>
          <li>
            <Link to="/top" state={{ kindnumber: 1 }}>
              탑
            </Link>
          </li>
          <li>
            <Link to="/knit" state={{ kindnumber: 1 }}>
              니트
            </Link>
          </li>
          <li>
            <Link to="/bottom" state={{ kindnumber: 1 }}>
              바텀
            </Link>
          </li>
          <li>
            <Link to="/dress" state={{ kindnumber: 1 }}>
              드레스
            </Link>
          </li>
          <li>
            <Link to="/access" state={{ kindnumber: 1 }}>
              악세사리
            </Link>
          </li>
          <li>
            <Link to="/shoesbag" state={{ kindnumber: 1 }}>
              슈즈&백
            </Link>
          </li>
        </ul>
      </header>
      <section>
        <div className={menuState}>
          <ul>
            <li>
              <Link to="/outer" state={{ kindnumber: 1 }} onClick={click}>
                <h4>OUTER</h4>
              </Link>
              <Link to="/outer" state={{ kindnumber: 2 }} onClick={click}>
                <p>자켓</p>
              </Link>
              <Link to="/outer" state={{ kindnumber: 3 }} onClick={click}>
                <p>점퍼</p>
              </Link>
              <Link to="/outer" state={{ kindnumber: 4 }} onClick={click}>
                <p>베스트</p>
              </Link>
              <Link to="/outer" state={{ kindnumber: 5 }} onClick={click}>
                <p>코트</p>
              </Link>
            </li>
            <li>
              <Link to="/top" state={{ kindnumber: 1 }} onClick={click}>
                <h4>TOP</h4>
              </Link>
              <Link to="/top" state={{ kindnumber: 2 }} onClick={click}>
                <p>티셔츠</p>
              </Link>
              <Link to="/top" state={{ kindnumber: 3 }} onClick={click}>
                <p>블라우스</p>
              </Link>
              <Link to="/top" state={{ kindnumber: 4 }} onClick={click}>
                <p>민소매탑</p>
              </Link>
            </li>
            <li>
              <Link to="/knit" state={{ kindnumber: 1 }} onClick={click}>
                <h4>KNIT</h4>
              </Link>
              <Link to="/knit" state={{ kindnumber: 2 }} onClick={click}>
                <p>니트</p>
              </Link>
              <Link to="/knit" state={{ kindnumber: 3 }} onClick={click}>
                <p>가디건</p>
              </Link>
              <Link to="/knit" state={{ kindnumber: 4 }} onClick={click}>
                <p>베스트&숄</p>
              </Link>
            </li>
            <li>
              <Link to="/bottom" state={{ kindnumber: 1 }} onClick={click}>
                <h4>BOTTOM</h4>
              </Link>
              <Link to="/bottom" state={{ kindnumber: 2 }} onClick={click}>
                <p>팬츠</p>
              </Link>
              <Link to="/bottom" state={{ kindnumber: 3 }} onClick={click}>
                <p>스커트</p>
              </Link>
            </li>
            <li>
              <Link to="/dress" state={{ kindnumber: 1 }} onClick={click}>
                <h4>DRESS</h4>
              </Link>
              <Link to="/dress" state={{ kindnumber: 2 }} onClick={click}>
                <p>원피스</p>
              </Link>
              <Link to="/dress" state={{ kindnumber: 3 }} onClick={click}>
                <p>투피스&점프슈트</p>
              </Link>
              <Link to="/dress" state={{ kindnumber: 4 }} onClick={click}>
                <p>점퍼</p>
              </Link>
              <Link to="/dress" state={{ kindnumber: 5 }} onClick={click}>
                <p>베스트</p>
              </Link>
            </li>
            <li>
              <Link to="/access" state={{ kindnumber: 1 }} onClick={click}>
                <h4>ACC</h4>
              </Link>
              <Link to="/access" state={{ kindnumber: 2 }} onClick={click}>
                <p>스카프&머플러</p>
              </Link>
              <Link to="/access" state={{ kindnumber: 3 }} onClick={click}>
                <p>파자마&라운지웨어</p>
              </Link>
              <Link to="/access" state={{ kindnumber: 4 }} onClick={click}>
                <p>주얼리&시계</p>
              </Link>
              <Link to="/access" state={{ kindnumber: 5 }} onClick={click}>
                <p>선글라스</p>
              </Link>
            </li>
            <li>
              <Link to="/shoesbag" state={{ kindnumber: 1 }} onClick={click}>
                <h4>SHOES&BAG</h4>
              </Link>
              <Link to="/shoesbag" state={{ kindnumber: 2 }} onClick={click}>
                <p>플랫</p>
              </Link>
              <Link to="/shoesbag" state={{ kindnumber: 3 }} onClick={click}>
                <p>로퍼&선로퍼</p>
              </Link>
              <Link to="/shoesbag" state={{ kindnumber: 4 }} onClick={click}>
                <p>힐&부츠</p>
              </Link>
              <Link to="/shoesbag" state={{ kindnumber: 5 }} onClick={click}>
                <p>가방</p>
              </Link>
              <Link to="/shoesbag" state={{ kindnumber: 6 }} onClick={click}>
                <p>파우치</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );

  function click() {
    if (iconState === 'icon') {
      setIcon('icon clicked');
      setMenu('menu clicked');
    } else if (iconState === 'icon clicked') {
      setIcon('icon');
      setMenu('menu');
    }
    console.log(iconState);
    console.log(menuState);
  }
}
