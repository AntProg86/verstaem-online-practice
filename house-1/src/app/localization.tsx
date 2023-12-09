import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

export interface IStrings extends LocalizedStringsMethods{
  _home: string;
  _about: string;
  language_switches: string;
  title: string;
  generate_error: string;
  reproductions: string;
  new_items: string;
  replica_paintings: string;
  ink_house: string;
  paragraph_1: string;
  products: string;
  Reproductions: string;
  france: string;
  germany: string;
  england: string;
  add_to_cart: string;
  francois_dupont: string;
  hunting_cupid: string;
  painting_desc_1: string;
  rub: string;
  new_coll: string;
  advertising_p_1: string;
  advertising_p_2: string;
  familiarize: string;
  our_team: string;
  our_team_p_1: string;
  workshop: string;
  all_rights_reserved: string;
  artists: string;
  managers: string;
}

// Таблица перевода
let strings: IStrings;
  strings = new LocalizedStrings({
    ru: {
      _home: "Главная",
      _about: "О нас",
      language_switches: "язык",
      title: "Заголовок",
      generate_error: 'Сгенерировать ошибку',
      reproductions: 'Репродукции',
      new_items: 'Новинки',
      replica_paintings: 'Реплики картин от',
      ink_house: 'Ink. House',
      paragraph_1: 'Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.',
      products: 'Продукция',
      Reproductions: 'Продукция',
      france: 'Франция',
      germany: 'Германия',
      england: 'Англия',
      add_to_cart: 'В корзину',
      francois_dupont: 'Франсуа Дюпон',
      hunting_cupid: 'Охота Амура',
      painting_desc_1: 'Холст, масло (50х80)',

      rub: 'руб',
      new_coll: 'Новая коллекция французских авторов',
      advertising_p_1 : 'Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.',
      advertising_p_2: 'Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.',
      familiarize: 'Ознакомиться',
      our_team: "Наша команда",
      our_team_p_1: 'Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.',
      workshop: 'Мастерская',
      all_rights_reserved: 'All rights reserved',
      artists: "Художники",
      managers: 'Менеджеры',
    },
    // en: {
    //   _home: "Home",
    //   _about: "О нас",
    //   language_switches: "language",
    //   title: "Title",
    //   generate_error: 'Generate error',
    //   reproductions: 'Репродукции',
    //   new_items: 'Новинки',
    //   replica_paintings: 'Реплики картин от',
    //   ink_house: 'Ink. House',
    // },
  });
 
export default strings;