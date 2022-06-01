export interface ProductThumb {
  id: string;
  thumb: string;
  color: string[];
  title: string;
  price: string;
}
export interface ProductDetail {
  id: string;
  thumb: string;
  color: string[];
  title: string;
  price: string;
  size: string[];
  photo: string[];
  itemaccount: string;
}

export interface FilterProduct {
  itemkind: string;
  itemlist: {
    id: string;
    title: string;
    color: string[];
    price: string;
    size: string[];
    thumb: string;
    photo: string[];
    itemaccount: string;
  }[];
}

//메뉴 알아서 조합해주는 컴포넌트
//인자 받아야할거 : 5개 id, thumbImg, colorArr, title, price

//ex)인자 Outer면 id[1],thumbImg[1],colorArr[1],title[1],price[1]
//id[2],thumbImg[2],colorArr[2],title[2],price[2]
//id[3],thumbImg[3],colorArr[3],title[3],price[3]
