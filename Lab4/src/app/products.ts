export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  image: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Игровая приставка Sony PlayStation 5 белый',
    price: 312,
    description: 'С Sony PlayStation 5 вы ощутите истинную силу игры Молниеносная скорость загрузки благодаря сверхскоростному накопителю SSD, невероятный эффект погружения благодаря тактильной отдаче, адаптивным спусковым кнопкам и 3D-звуку, а также потрясающие игры нового поколения для PlayStation 5.',
    url: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/hbe/49348562681886/sony-playstation-5-belyj-100746577-1-Container.jpg',
    rating: 9
  },
  {
    id: 2,
    name: 'Игровая приставка Xbox Series X 1TB черный',
    price: 300,
    description: 'Игры, созданные с использованием набора для разработки Xbox Series X|S, демонстрируют значительное сокращение времени загрузки и потрясающие визуальные эффекты с частотой до 120 кадров в секунду.',
    url: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/hbe/33586549227550/xbox-series-x-1tb-cernyj-100824897-1-Container.jpg',
    rating: 8
  },
  {
    id: 3,
    name: 'Смартфон Samsung Galaxy S22+ 8 ГБ/128 ГБ черный',
    price: 799,
    description: 'Новая форма самовыражения Утонченные лицевые панели гармонично сочетаются с изысканным корпусом. Роскошный вид дополняет лакончиная система линейных камер. Он просто великолепен.',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662854/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/hbc/48695407411230/samsung-galaxy-s22-8-128gb-cernyj-103662854-1.jpg',
    rating: 8
  },
  {
    id: 4,
    name: 'Смарт-часы Samsung Galaxy Watch 4 SM-R870N 44 мм черный',
    price: 87,
    description: 'Отслеживайте свой прогресс в фитнесе при помощи наших первых Galaxy Watch, которые умеют анализировать состав тела. Узнайте, какое количество жира, скелетных мышц, воды содержится в вашем организме и другие данные, которые помогут достичь поставленных целей.',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-sm-r870n-44-mm-chernyi-102120636/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7e/hbe/44806576209950/samsung-galaxy-watch-4-sm-r870n-44mm-cernyj-102120636-1-Container.jpg',
    rating: 7
  },
  {
    id: 5,
    name: 'Смартфон Apple iPhone 14 Pro 128Gb фиолетовый',
    price: 578,
    description: 'Фронтальная камера отличная. Apple впервые добавила автофокус, который срабатывает мгновенно и очень точно. Разрешение у фронталки ниже, чем у большинства андроид-флагманов, но снимает она лучше за счет более качественного сенсора.',
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfe/hf7/62948389748766/apple-iphone-14-pro-128gb-fioletovyj-106363283-1.jpg',
    rating: 10
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/