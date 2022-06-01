import './ProductTopBar.scss';
export default function ProductTopBar() {
  return (
    <>
      <div className="product_top">
        <ul>
          <li>인기상품</li>
          <li>신상품</li>
          <li>낮은가격</li>
          <li>높은가격</li>
        </ul>
      </div>
    </>
  );
}
