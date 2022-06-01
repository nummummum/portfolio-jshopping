import './ProductMenu.scss';
import '../common/common.scss';
import { ProductThumb } from '../types/type';

//메뉴 알아서 조합해주는 컴포넌트
//인자 받아야할거 : 5개 itemkind, thumbImg, colorArr, title, price

export default function ProductMenu(props: ProductThumb) {
  const pid = props.id;
  const pimg = '/images/' + props.thumb;
  let pcolor = props.color;
  const ptitle = props.title;
  const pprice = props.price;
  // console.log('작동합니다.');
  // console.log(props.id);
  // console.log(props.thumb);
  // console.log(props.color);
  // console.log(props.title);
  // console.log(props.price);
  return (
    <>
      <div className="product_menu">
        <img className="product_thumb" src={pimg} alt="" />
        <div className="color_wrap">
          {pcolor.map((color, index) => (
            <span
              key={index}
              className={color.replace(color, 'color ' + color)}
            />
          ))}
        </div>
        <h4 className="product_title">{ptitle}</h4>
        <h5 className="product_price">{pprice}</h5>
      </div>
    </>
  );
}
