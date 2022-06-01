import itemData from '../db/productlist.json';
import { FilterProduct, ProductDetail } from '../types/type';

//항목 불러오는 함수
export default function filterList(
  product: FilterProduct,
  productkind: string
) {
  let productArr = Object.assign({}, product);
  productArr.itemlist = productArr.itemlist.filter(item =>
    item.id.includes(productkind)
  );
  //   console.log(productArr);
  return productArr;
}
